const path = require('path')
const readingTime = require('reading-time')
const { isEmpty, kebabCase } = require('lodash')

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'Mdx') {
    createNodeField({
      node,
      name: `readingTime`,
      value: readingTime(node.rawBody),
    })
    if (node.frontmatter && node.frontmatter.slug) {
      createNodeField({
        name: 'slug',
        node,
        value: `/${node.frontmatter.slug}`,
      })
    } else if (node.frontmatter && node.frontmatter.title) {
      createNodeField({
        name: 'slug',
        node,
        value: `/${kebabCase(node.frontmatter.title)}`,
      })
    }
    if (node.frontmatter && !isEmpty(node.frontmatter.tags)) {
      const tagSlugs = node.frontmatter.tags.map(
        (tag) => `/tag/${kebabCase(tag)}`,
      )
      createNodeField({
        name: 'tagSlugs',
        node,
        value: tagSlugs,
      })
    }
    if (node.frontmatter && !isEmpty(node.frontmatter.category)) {
      createNodeField({
        name: 'categorySlug',
        node,
        value: `/category/${kebabCase(node.frontmatter.category)}`,
      })
    }
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const postPage = path.resolve('src/components/PostPage.js')
    const tagPage = path.resolve('src/components/TagPage.js')
    // const categoryPage = path.resolve('src/templates/CategoryPage.js');
    resolve(
      graphql(
        `
          {
            allMdx {
              edges {
                node {
                  id
                  frontmatter {
                    title
                    tags
                    category
                  }
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `,
      ).then((result) => {
        if (result.errors) {
          /* eslint no-console: "off" */
          console.log(result.errors)
          reject(result.errors)
        }

        const tagSet = new Set()
        const categorySet = new Set()
        result.data.allMdx.edges.forEach((edge) => {
          if (edge.node.frontmatter.tags) {
            edge.node.frontmatter.tags.forEach((tag) => {
              tagSet.add(tag)
            })
          }

          if (edge.node.frontmatter.category) {
            categorySet.add(edge.node.frontmatter.category)
          }

          createPage({
            path: edge.node.fields.slug,
            component: postPage,
            context: {
              id: edge.node.id,
            },
          })
        })

        const tagList = Array.from(tagSet)
        tagList.forEach((tag) => {
          createPage({
            path: `/tag/${kebabCase(tag)}/`,
            component: tagPage,
            context: {
              tag,
            },
          })
        })

        // const categoryList = Array.from(categorySet);
        // categoryList.forEach(category => {
        //   createPage({
        //     path: `/category/${kebabCase(category)}/`,
        //     component: categoryPage,
        //     context: {
        //       category,
        //     },
        //   });
        // });
      }),
    )
  })
}
