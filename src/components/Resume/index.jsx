import PropTypes from 'prop-types';
import React, {Component} from "react";
import './index.css';

class Resume extends Component {
  render() {
    const {
      sections
    } = this.props;

    return (
      <div className="resume">
        <article>
          {sections.map(section => (
            <section key={`body-${section.slug}`}>
              <header>
                <h1><a name={section.slug} id={section.slug}>{section.heading}</a></h1>
              </header>
              <div>
                {section.body}
              </div>
            </section>
          ))}
        </article>
      </div>
    );
  }
}

Resume.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape({
    heading: PropTypes.string.isRequired,
    body: PropTypes.node.isRequired,
  })),
};
Resume.defaultProps = {
  sections: [],
};
export default Resume;
