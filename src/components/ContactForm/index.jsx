import Button from 'material-ui/Button';
import classNames from 'classnames';
import React, {Component} from 'react';
import Send from 'material-ui-icons/Send';
import TextField from 'material-ui/TextField';
import {Notification} from 'react-notification';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  columnContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  containerToRight: {
    justifyContent: 'flex-end',
  },
  iconToRight: {
    marginLeft: theme.spacing.unit,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    flex: 1,
  },
  textFieldPhone: {
    flex: 0.75,
  },
});

class ContactForm extends Component {
  constructor(...rest) {
    super(...rest);
    this.state = {};
    this.send = this.send.bind(this);
  }

  render() {
    const {
      classes,
    } = this.props;
    const {
      message,
      success,
    } = this.state;

    return (
      <form
        id="gform"
        className={classes.columnContainer}
        ref={el => {
          this.form = el;
        }}
      >
        <TextField
          required
          className={classes.textField}
          label="Your name"
          margin="normal"
          name="name"
        />
        <div className={classes.rowContainer}>
          <TextField
            required
            className={classes.textField}
            label="Your email"
            margin="normal"
            name="email"
            type="email"
          />
          <TextField
            className={classNames(classes.textField, classes.textFieldPhone)}
            label="Your phone number"
            margin="normal"
            name="phone"
            type="tel"
          />
        </div>
        <TextField
          multiline
          required
          className={classes.textField}
          label="Your message"
          margin="normal"
          name="message"
          rows={4}
        />
        <div className={classNames(classes.rowContainer, classes.containerToRight)}>
          <Button
            raised
            className={classes.button}
            color="primary"
            onClick={this.send}
          >
            Send
            <Send className={classes.iconToRight}/>
          </Button>
        </div>
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

  send() {
    const data = Array.from(this.form.querySelectorAll('input').values())
      .reduce((prev, input) => {
        prev.append(input.name, input.value);
        return prev;
      }, new FormData());
    data.append('message', this.form.querySelector('textarea').value);

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
  }
}

export default withStyles(styles)(ContactForm);
