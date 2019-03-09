import MDXRenderer from "gatsby-mdx/mdx-renderer";
import React from "react";
import { graphql } from "gatsby";
import Layout from "./Layout";
import Seo from "./Seo";

const PostLayout = ({ data: { mdx: post } }) => {
  return (
    <Layout>
      <Seo title={post.frontmatter.title} />
      <article>
        <header>
          <h1>{post.frontmatter.title}</h1>
        </header>
        <MDXRenderer>{post.code.body}</MDXRenderer>
        <footer />
      </article>
    </Layout>
  );
};

export default PostLayout;

export const pageQuery = graphql`
  query PostById($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        slug
        tagSlugs
        categorySlug
        readingTime {
          text
        }
      }
      code {
        body
      }
    }
  }
`;
