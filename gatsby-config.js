const path = require('path')

const siteMetadata = {
  title: 'Andrew Smith',
  altTitle: 'Professional profile of Andrew Smith',
  author: 'Andrew Smith',
  description: 'A professional profile, resume, and blog of Andrew Smith.',
  siteUrl:
    process.env.NODE_ENV === 'development'
      ? 'localhost'
      : 'https://andrew.codes',
  disqus: {
    shortName: 'andrew-codes',
  },
  rssMetadata: {
    site_url: 'https://andrew.codes',
    feed_url: 'https://andrew.codes/rss.xml',
    title: 'Andrew Smith',
    description: 'A professional profile, resume, and blog of Andrew Smith.',
    image_url: `https://andrew.codes/logo-48.png`,
    author: 'Andrew Smith',
    copyright: `Copyright © ${new Date().getFullYear()}. Andrew Smith`,
  },
}

module.exports = {
  siteMetadata,
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: path.join(__dirname, 'src', 'content', 'posts'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
    },
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 690,
              sizeByPixelDensity: true,
            },
          },
          { resolve: 'gatsby-remark-responsive-iframe' },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        // color: 'config.themeColor',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-twitter',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.altTile,
        description: siteMetadata.description,
        start_url: siteMetadata.siteUrl,
        // background_color: config.backgroundColor,
        // theme_color: config.themeColor,
        display: 'minimal-ui',
        icons: [
          {
            src: '/logos/logo-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/logos/logo-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    'gatsby-plugin-offline',
    // {
    //   resolve: 'gatsby-plugin-feed',
    //   options: {
    //     setup(ref) {
    //       const ret = ref.query.site.siteMetadata.rssMetadata;
    //       ret.allMarkdownRemark = ref.query.allMarkdownRemark;
    //       ret.generator = 'GatsbyJS Material Starter';
    //       return ret;
    //     },
    //     query: `
    //     {
    //       site {
    //         siteMetadata {
    //           rssMetadata {
    //             site_url
    //             feed_url
    //             title
    //             description
    //             image_url
    //             author
    //             copyright
    //           }
    //         }
    //       }
    //     }
    //   `,
    //     feeds: [
    //       {
    //         serialize(ctx) {
    //           const rssMetadata = ctx.query.site.siteMetadata.rssMetadata;
    //           return ctx.query.allMarkdownRemark.edges.map(edge => ({
    //             categories: edge.node.frontmatter.tags,
    //             date: edge.node.frontmatter.date,
    //             title: edge.node.frontmatter.title,
    //             description: edge.node.excerpt,
    //             author: rssMetadata.author,
    //             url: rssMetadata.site_url + edge.node.fields.slug,
    //             guid: rssMetadata.site_url + edge.node.fields.slug,
    //             custom_elements: [{ 'content:encoded': edge.node.html }]
    //           }));
    //         },
    //         query: `
    //         {
    //           allMarkdownRemark(
    //             limit: 1000,
    //             sort: { order: DESC, fields: [frontmatter___date] },
    //           ) {
    //             edges {
    //               node {
    //                 excerpt
    //                 html
    //                 timeToRead
    //                 fields { slug }
    //                 frontmatter {
    //                   title
    //                   cover
    //                   date
    //                   category
    //                   tags
    //                 }
    //               }
    //             }
    //           }
    //         }
    //       `,
    //         output: config.siteRss
    //       }
    //     ]
    //   }
    // }
  ],
}
