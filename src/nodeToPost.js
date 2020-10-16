export default ({ node }) => ({
  ...node,
  ...node.frontmatter,
  ...node.fields,
  readingTime: node.fields.readingTime.text,
  tags: node.frontmatter.tags.map((tag, index) => ({
    name: tag,
    slug: node.fields.tagSlugs[index],
  })),
})
