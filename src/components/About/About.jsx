import React, {Component} from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="about">
        <h1>
          Andrew Smith
        </h1>

        <blockquote>developer, speaker, OSS contributor; lifelong learner</blockquote>

        <p>Software craftsman, speaker and open source contributor, I am passionate about creating quality software. As
          a craftsman, I am a strong subscriber to TDD and firmly believe in the emergent design of software
          architectures. Software development is truly dynamic and evolutionary and its architecture is less about the
          tools and more of an expression of its intent and usage.</p>

        <p>Although a student at heart, I also mentor others to aid them on their journey. I do this through
          presentations and workshops at various conferences and also participates in mentoring programs, such as
          [JrDevMentoring](http://www.jrdevmentoring.com/), with one-on-one mentoring and code pairing sessions.</p>

        <p>I am an active member of the open source community and value open source software projects. As a co-organizer
          of [ReactAtl](https://www.meetup.com/React-ATL/), an Atlanta based React meetup group, I encourage others to
          participate and aim to make software development more accessible to a larger audience.</p>

        <p>Being a lifelong learner, I am in constant pursuit of improvement in all things I do. My goal is to be better
          today than I was yesterday and to overcome, instead of succumb, to the challenges presented before me.</p>

        <div className="about-me social-links">
          <div className="container">
            <a href="https://twitter.com/andrew_codes"><i className="fa fa-twitter"/></a>
            <a href="https://github.com/andrew-codes"><i className="fa fa-github"/></a>
            <a href="https://linkedin.com/in/jamesandrewsmith"><i className="fa fa-linkedin"/></a>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
