import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PostList from "../components/PostList";

const Index = ({ data }) => (
  <Layout>
    <div>
      <PostList
        posts={data.allMdx.edges.map(({ node }) => ({
          ...node.frontmatter,
          readingTime: node.fields.readingTime.text,
          slug: node.fields.slug,
          tags: node.frontmatter.tags.map((tag, index) => ({
            name: tag,
            slug: node.fields.tagSlugs[index]
          }))
        }))}
      />
    </div>
  </Layout>
);

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    allMdx(limit: 2000, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            categorySlug
            readingTime {
              text
            }
            slug
            tagSlugs
          }
          frontmatter {
            cover
            date
            tags
            title
          }
        }
      }
    }
  }
`;
