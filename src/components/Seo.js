import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import React from 'react'
import { isEmpty } from 'lodash'
import { graphql, StaticQuery } from 'gatsby'
import favicon from '../images/logo-48.png'

const Seo = ({ description, lang, meta, keywords, title, cover, url }) => (
  <StaticQuery
    query={siteMetadataQuery}
    render={({ site }) => {
      const metaDescription = description || site.siteMetadata.description
      const headTitle = title
        ? `${title} | ${site.siteMetadata.title}`
        : site.siteMetadata.title
      const schemaOrgJSONLD = [
        {
          '@context': 'http://schema.org',
          '@type': 'WebSite',
          url: site.siteMetadata.siteUrl,
          name: headTitle,
          alternateName: site.siteMetadata.altTitle,
        },
      ]
      if (url) {
        schemaOrgJSONLD.concat([
          {
            '@context': 'http://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                item: {
                  '@id': url,
                  name: title,
                  image: cover,
                },
              },
            ],
          },
          {
            '@context': 'http://schema.org',
            '@type': 'BlogPosting',
            url: site.siteMetadata.siteUrl,
            name: site.siteMetadata.title,
            alternateName: site.siteMetadata.altTitle,
            headline: title,
            image: {
              '@type': 'ImageObject',
              url: cover,
            },
            description: metaDescription,
          },
        ])
      }

      return (
        <Helmet
          htmlAttributes={{
            lang,
          }}
        >
          <title>{headTitle}</title>
          <meta name="description" content={metaDescription} />
          {!isEmpty(keywords) && (
            <meta name="keywords" content={keywords.join(', ')} />
          )}
          <meta name="og:title" content={headTitle} />
          <meta name="og:description" content={metaDescription} />
          <meta name="og:type" content="website" />
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:creator"
            content={site.siteMetadata.author.name}
          />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={metaDescription} />
          <meta name="twitter:image" content={cover} />
          {meta.map(({ name, content }) => (
            <meta name={name} content={content} />
          ))}
          <link rel="canonical" href={site.siteMetadata.siteUrl} />
          <link rel="shortcut icon" href={favicon} />
          <script type="application/ld+json">
            {JSON.stringify(schemaOrgJSONLD)}
          </script>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-45622906-3"
          />
          <script>
            {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-45622906-3');`}
          </script>
          <script>
            {`!function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1488033381245877');
              fbq('track', 'PageView');`}
          </script>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<img
              alt=""
              height="1"
              src="https://www.facebook.com/tr?id=1488033381245877&ev=PageView&noscript=1"}
              style={{ display: 'none' }}
              width="1"
            />`,
            }}
          />
        </Helmet>
      )
    }}
  />
)

Seo.defaultProps = {
  cover: favicon,
  lang: 'en',
  keywords: [],
  meta: [],
}

Seo.propTypes = {
  cover: PropTypes.string,
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
}

export default Seo

const siteMetadataQuery = graphql`
  query SeoQuery {
    site {
      siteMetadata {
        altTitle
        author {
          name
        }
        description
        siteUrl
        title
      }
    }
  }
`
