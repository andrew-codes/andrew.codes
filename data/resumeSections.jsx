import React from 'react';

const createSection = (heading, body) => ({
  body,
  heading,
});

export default [
  createSection('Profile Summary', (
    <div>
      <p>As a craftsman, I am passionate about creating quality software and therefore am a strong subscriber to TDD and
        firmly believe in the emergent design of software architectures. Development is truly evolutionary; with its
        architecture reflecting less about the tools and more of the expression to its intent and usage.</p>
      <p>Although a student at heart, I also mentor others to aid them on their journey. I do this via presentations and
        workshops at various conferences and participate in mentoring programs, such as Pluralsight, one-one-one
        mentoring, and remote code pairing sessions.</p>
      <p>I am an active member of the OSS community and value OSS software projects. As a member and previous
        co-organizer of ReactATL, I encourage others to participate and aim to make software development more accessible
        to a larger audience.</p>
      <p> Being a lifelong learner, I am in constant pursuit of improvement in all things I do. My goal is to always be
        better today than yesterday and rise to challenges of tomorrow.</p>
    </div>
  )),
  createSection('Proficiencies Overview', (
    <div>
      <section>
        <h2>Technologies</h2>
      </section>
      <section>
        <h2>Skills</h2>
      </section>
      <section>
        <h2>Frameworks</h2>
      </section>
    </div>
  )),
  createSection('Experience', (
    <div>
      <section>
        <h2>VersionOne</h2>
      </section>
      <section>
        <h2>Pluralsight hack.hands()</h2>
      </section>
      <section>
        <h2>MATRIX Resources, Professional Services</h2>
      </section>
      <section>
        <h2>M*Modal</h2>
      </section>
      <section>
        <h2>Response Mine Interactive</h2>
      </section>
      <section>
        <h2>Daxko</h2>
      </section>
      <section>
        <h2>MedSEEK</h2>
      </section>
      <section>
        <h2>Intermark Group</h2>
      </section>
      <section>
        <h2>Columbus Technical College</h2>
      </section>
      <section>
        <h2>Meranko</h2>
      </section>
    </div>
  )),
  createSection('Community Involvement', (
    <div>
      <section>
        <h2>Building Redux Workshop</h2>
      </section>
      <section>
        <h2>ReactATL Meet-up Co-organizer</h2>
      </section>
      <section>
        <h2>React Hands-on Workshop</h2>
      </section>
      <section>
        <h2>Let's Talk about Flux</h2>
      </section>
      <section>
        <h2>Graphql and Relay</h2>
      </section>
      <section>
        <h2>Let's Talk about Flux</h2>
      </section>
    </div>
  )),
  createSection('Education', (
    <div>
      <h2>Columbus State University</h2>
    </div>
  ))
].map(section => ({
  ...section,
  slug: section.heading.replace(' ', '-'),
}));
