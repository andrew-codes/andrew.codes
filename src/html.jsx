/* eslint import/no-unresolved:"off" */
/* eslint import/extensions:"off" */
/* eslint global-require:"off" */
import React from "react";
import "whatwg-fetch";
import favicon from "./favicon.png";

let inlinedStyles = "";
if (process.env.NODE_ENV === "production") {
  try {
    /* eslint import/no-webpack-loader-syntax: off */
    inlinedStyles = require("!raw-loader!../public/styles.css");
  } catch (e) {
    /* eslint no-console: "off" */
    console.log(e);
  }
}

export default class HTML extends React.Component {
  render() {
    let css;
    if (process.env.NODE_ENV === "production") {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: inlinedStyles }}
        />
      );
    }
    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8" content="text/html" httpEquiv="Content-Type" />
          <meta
            content="width=device-width, initial-scale=1.0"
            name="viewport"
          />
          <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />
          {this.props.headComponents}
          <link href={favicon} rel="shortcut icon" />
          <link
            href="https://fonts.googleapis.com/css?family=Lustria"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Lato:300"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="/css/font-awesome.min.css"
            rel="stylesheet"
            type="text/css"
          />
          {css}
          <meta name="HandheldFriendly" content="True" />
          <meta name="MobileOptimized" content="320" />
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
