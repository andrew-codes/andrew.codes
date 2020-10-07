export default ({ node }) => ({
  ...node.frontmatter,
  readingTime: node.fields.readingTime.text,
  slug: node.fields.slug,
  tags: node.frontmatter.tags.map((tag, index) => ({
    name: tag,
    slug: node.fields.tagSlugs[index],
  })),
  body: node.body,
  excerpt: node.excerpt,
  tableOfContents: node.tableOfContents,
})
