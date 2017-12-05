import Helmet from "react-helmet";
import React, {Component} from "react";
import config from "../../data/SiteConfig";
import Resume from '../components/Resume';

const createSection = (heading, body) => ({
  body,
  heading,
});

const getSections = () => [
  createSection('Summary', (<p>I am Andrew.</p>)),
  createSection('Summary 2', (<p>I am Andrew also.</p>)),
];

class ResumePage extends Component {
  render() {
    return (
      <div className="container">
        <Helmet title={`Resume | ${config.siteTitle}`}/>
        <Resume sections={getSections()}/>
      </div>
    );
  }
}

export default ResumePage;
