import React from 'react';

const createSection = (heading, body) => ({
  body,
  heading,
});

export default [
  createSection('Profile Summary', (<p>I am Andrew.</p>)),
].map(section => ({
  ...section,
  slug: section.heading.replace(' ', '-'),
}));
