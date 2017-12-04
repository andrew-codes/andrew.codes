import React, { Component } from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";

class ResumePage extends Component {
  render() {
    return (
      <div className="about-container">
        <Helmet title={`Resume | ${config.siteTitle}`} />
      </div>
    );
  }
}

export default ResumePage;
