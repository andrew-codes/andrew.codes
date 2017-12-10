---
title: "Jest vs. Mocha: Why Jest Wins"
date: "09/10/2014"
cover: "/images/posts/2014-09-10-jest-vs-mocha-why-jest-wins/cover.png"
category: "tech"
tags:
    - tdd
    - javascript
    - jest
---

When developing front-end applications, my TDD tool belt consists of karma, mocha, sinon, and chai. When I first learned of [Jest](http://facebook.github.io/jest), I was skeptical of the new JavaScript unit testing framework and was not convinced I should make the switch. After a bit of research and a sample [project on Github](https://github.com/andrew-codes/react-jest-browserify-gulp-bootstrap), I will tell you why I have made the decision to switch and why you should, too.

## Key Motivations for Jest

The biggest motivation to use Jest is stated clearly on their website: "*painless JavaScript unit testing*." I never really thought of my current workflow as being painful, but sometimes we learn more about ourselves from others. This certainly applied with Jest. I did not realize just how cumbersome my workflow was until I used another one that was significantly easier.

The "easier" part boiled down to three primary features:

* All dependencies are mocked by default
* Ease of setup and configuration
* Auto-magically finds and runs all your tests; no registration required

## To Mock, or Not To Mock? Shouldn't be a Question

Unit tests predominantly test two things: a unit of work **in isolatation** and its **collaboration** with other things. Isolating a unit of work from dependencies and asserting its correct use with collaborators requires these dependencies to be mocked or faked. Generally speaking, most, if not all, of your dependencies will be mocked in some fashion. The majority of other testing frameworks, JavaScript or otherwise, requires you to explicitly mock your dependencies.

This seems fine, but only because that is the way everyone else does it. The vast majority of the time you need to mock all dependencies with the exception of the subject under test. Not mocking a particular dependency is typically an edge-case. If we typically mock everything but the SUT, then why do frameworks have us do the exact opposite; not mock the SUT and explicitly define our mocks for everything else?

Here I agree with Jest's approach. Jest automatically mocks all dependencies unless otherwise specified. This allows us to only setup our mocks for what is relevant to the test in question, but still have all other dependencies be fakes. It also means that changing interactions with collaborators is quicker and easier. No need for unnecessary setup of a fake; it's setup for you out the gate.

## Configuration has Never Been Easier

If you use mocha/karma with CommonJS modules, then you know that module paths can sometimes bite you. This is especially true when configuring karma. I have come across a variety of directory structures and with each one I have run into some sort of path related issue when configuring the client-side testing stack.

### Mocha Experience

1. Create your karma config file
2. Include mocha, sinon, and chai karma frameworks, as well as the plugins for them ([karma-mocha](https://www.npmjs.org/package/karma-mocha), [karma-sinon](https://www.npmjs.org/package/karma-sinon), [karma-chai](https://www.npmjs.org/package/karma-chai), and [karma-sinon-chai](https://www.npmjs.org/package/karma-sinon-chai)).
3. Don't forget to include a karma plugin for your browser (IE, PhantomJS, Chrome, etc.)
4. Include your source files and test files by registering them with karma
5. Don't forget to not load your source files otherwise they may be loaded twice with errors
6. Include third-party dependencies to be used as CommonJS modules
     * Using bower? Either explicitly add every bower package's main file to the config file or write custom code to pull them and translate them properly
     * Using a CDN for some? Don't forget to include these explicitly
7. Don't forget to exclude your node_modules folder from being processed as CommonJS modules
8. Don't forget to include configuration for the plugins that enable you to use CommonJS with karma ([karma-common-js](https://www.npmjs.org/package/karma-commonjs)).
9. Create a test. Mock any requires needed for the module and test.
10. Run `karma ./path/to/karma.config.js`

### Jest Experience

1. Create a `__tests__` directory to contain your tests.
2. Create a test. Tell jest not to mock the SUT and setup any fakes required.
3. Run `jest` from the command line.

### What about...?
**What about the third-party dependencies?** What if my module and/or test needed jQuery from a bower_components directory? Or a CDN? How does it know where jQuery is coming from? The simple answer is it doesn't matter. It's mocked!

**What about telling it where the test files are or where the source files are?** Jest takes care of that also by using the convention that all your tests are in the `__tests__` directory.

**What about the DOM manipulations?** It utilizes jsdom to allow the testing of DOM operations.

## Final Thoughts

Overall, I am quite impressed with Jest. I am impressed enough to adopt it as my personal standard for client-side unit testing and recommend it to any one else working with TDD for front-end development. However, there was one noticeable drawback: it is a little slow to run your tests. Compared to mocha/karma, it takes longer to run your tests. How much longer? Noticeable. Too long? Up for debate. Honestly, with all the benefits it brings to the table, I am ok sacrificing a little bit of test runner speed.

Check out my [project](https://github.com/andrew-codes/react-jest-browserify-gulp-bootstrap) for using **Jest + React + Browserify + Gulp** on Github. It provides a starting point for new projects wanting to integrate Jest, React, Browserify, and Gulp. In the meantime, learn more about [Jest](http://facebook.github.io/jest) and take it for a spin. You may be pleasantly surprised.
