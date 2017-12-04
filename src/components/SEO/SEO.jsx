import React, { Component } from "react";
import Helmet from "react-helmet";
import NoScript from "react-noscript";
import config from "../../../data/SiteConfig";

class SEO extends Component {
  render() {
    const { postNode, postPath, postSEO } = this.props;
    let title;
    let description;
    let image;
    let postURL;
    if (postSEO) {
      const postMeta = postNode.frontmatter;
      title = postMeta.title;
      description = postMeta.description
        ? postMeta.description
        : postNode.excerpt;
      image = postMeta.cover;
      postURL = config.siteUrl + config.pathPrefix + postPath;
    } else {
      title = config.siteTitle;
      description = config.siteDescription;
      image = config.siteLogo;
    }
    const realPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix;
    image = config.siteUrl + realPrefix + image;
    const blogURL = config.siteUrl + config.pathPrefix;
    const schemaOrgJSONLD = [
      {
        "@context": "http://schema.org",
        "@type": "WebSite",
        url: blogURL,
        name: title,
        alternateName: config.siteTitleAlt ? config.siteTitleAlt : ""
      }
    ];
    if (postSEO) {
      schemaOrgJSONLD.push([
        {
          "@context": "http://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@id": postURL,
                name: title,
                image
              }
            }
          ]
        },
        {
          "@context": "http://schema.org",
          "@type": "BlogPosting",
          url: blogURL,
          name: title,
          alternateName: config.siteTitleAlt ? config.siteTitleAlt : "",
          headline: title,
          image: {
            "@type": "ImageObject",
            url: image
          },
          description
        }
      ]);
    }
    return (
      <Helmet>
        {/* General tags */}
        <meta name="description" content={description} />
        <meta name="image" content={image} />

        {/* Schema.org tags */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>

        {/* OpenGraph tags */}
        <meta property="og:url" content={postSEO ? postURL : blogURL} />
        {postSEO ? <meta property="og:type" content="article" /> : null}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta
          property="fb:app_id"
          content={config.siteFBAppID ? config.siteFBAppID : ""}
        />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:creator"
          content={config.userTwitter ? config.userTwitter : ""}
        />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        {config.siteFBInsightsID && (
          <script>
            {`!function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${config.siteFBInsightsID}');
              fbq('track', 'PageView');`}
          </script>
        )}
        {config.siteFBInsightsID && (
          <NoScript>
            <img
              alt=""
              height="1"
              src={`https://www.facebook.com/tr?id=${
                config.siteFBInsightsID
              }&ev=PageView&noscript=1`}
              style={{ display: "none" }}
              width="1"
            />
          </NoScript>
        )}
      </Helmet>
    );
  }
}

export default SEO;
