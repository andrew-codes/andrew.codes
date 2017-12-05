import Helmet from "react-helmet";
import React, {Component} from "react";
import config from "../../data/SiteConfig";
import Resume from '../components/Resume';
import resumeSections from '../../data/resumeSections';

class ResumePage extends Component {
  render() {
    return (
      <div className="container">
        <Helmet title={`Resume | ${config.siteTitle}`}/>
        <Resume sections={resumeSections}/>
      </div>
    );
  }
}

export default ResumePage;
