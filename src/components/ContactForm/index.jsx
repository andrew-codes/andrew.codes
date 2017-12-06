import React, {Component} from 'react';
import {Notification} from 'react-notification';
import './index.css';

class ContactForm extends Component {
  constructor(...rest) {
    super(...rest);
    this.state = {};
  }

  render() {
    const {
      message,
      success,
    } = this.state;

    return (
      <form
        id="gform"
        className="form"
        ref={el => {
          this.form = el;
        }}
      >
        <input type="text" name="name" placeholder="Please enter your name"/>
        <div className="reply-to">
          <input type="tel" name="phone" placeholder="Please enter your phone"/>
          <input type="email" name="email" placeholder="Please enter your email"/>
        </div>
        <textarea
          name="message"
          placeholder="Please enter your message"
          ref={el => {
            this.messageEl = el;
          }}
        />
        <button
          className="primary"
          type="button"
          onClick={() => {
            const data = Array.from(this.form.querySelectorAll('input').values())
              .reduce((prev, input) => {
                prev.append(input.name, input.value);
                return prev;
              }, new FormData());
            data.append('message', this.messageEl.value);

            fetch('https://script.google.com/a/andrew.codes/macros/s/AKfycbxbMlRdxhzoKuTZNjtmEMBT5TQeiHq4lNdEmjdLW-Od6DjjagQF/exec', {
              method: 'POST',
              body: data,
            })
              .then(() => this.setState({
                message: 'Thank you!',
                success: true,
              }))
              .catch(error => this.setState({
                message: `Oops, there's been a error: ${error}`,
                success: false,
              }));
          }}
        >
          Send <i className="fa fa-send"/>
        </button>
        <Notification
          activeBarStyle={{
            backgroundColor: success ? 'green' : 'red',
            right: 40,
            left: undefined,
          }}
          isActive={Boolean(message)}
          onDismiss={() => this.setState({
            message: null,
          })
          }
          title={success ? 'Success' : 'Error'}
          message={message}
        />
      </form>
    )
  }
}

export default ContactForm;
