import Link from 'gatsby-link';
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
        <nav className="navbar">
          <div>
            <ul>
              {sections.map(section => {
                const slug = section.heading.replace(' ', '-');
                return (
                  <li key={`navigation-${slug}`}>
                    <Link to="/resume/#test1">{section.heading}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
        <article>
          {sections.map(section => {
            const slug = section.heading.replace(' ', '-');
            return (
              <section key={`body-${slug}`}>
                <header>
                  <h1>{section.heading}</h1>
                </header>
                <div>
                  {section.body}
                </div>
              </section>
            );
          })}
          <section>
            <header>
              <h1><a name="test1" id="test1">Test1</a></h1>
            </header>

            <div>Hello wolrd.
            </div>
          </section>
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
