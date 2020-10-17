import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import Link from '../components/Link'
import SpacedGroup from '../components/SpacedGroup'
import { BodyCopy } from '../components/Typography'

const ArticleBody = styled.div`
  background-color: rgb(34, 35, 39);
  border-radius: 28px;
  padding: 32px 85px;
  margin: -96px auto 0 auto;
  max-width: 1000px;
  position: relative;
`

const BioCoverImage = styled(Img)`
  border-radius: 8px;
`

const Footer = styled.footer``

const Index = ({ data }) => {
  return (
    <Layout>
      <article>
        <BioCoverImage fluid={data.fileName.childImageSharp.fluid} />
        <ArticleBody>
          <BodyCopy>
            I am passionate about creating quality software. As an active
            community member, I encourage others to participate and make
            development more accessible to a larger audience. My one goal is
            always to be better today than I was yesterday and overcome
            tomorrow’s challenges.
          </BodyCopy>
          <BodyCopy>
            Although a student at heart, I also mentor others to aid them on
            their journey. I do this through presentations and workshops at
            various conferences and volunteer with one-on-one mentoring and code
            pairing sessions.
          </BodyCopy>
          <BodyCopy>
            I am an active member of the open-source community and value
            open-source software projects. As a former co-organizer of ReactATL,
            an Atlanta based React meetup group, I encourage others to
            participate and aim to make software development more accessible to
            a larger audience.
          </BodyCopy>
          <BodyCopy>
            As a contributor, I have helped maintain projects such as{' '}
            <Link to="https://www.gatsbyjs.com/">Gatsby</Link>,{' '}
            <Link to="https://cypress.io">cypress</Link>, and{' '}
            <Link to="https://github.com/versionone/VersionOne.SDK.JavaScript">
              VersionOne’s JavaScript SDK
            </Link>
            . I look for opportunities to give back to the community, such as
            open sourcing VersionOne’s component library.
          </BodyCopy>
          <BodyCopy>
            Being a lifelong learner, I am in constant pursuit of improvement in
            all the things I do.
          </BodyCopy>
        </ArticleBody>
        <SpacedGroup spread>
          <SpacedGroup spread as={Footer} spacing={16}>
            {data.site.siteMetadata.author.socialProfiles.map(
              ({ name, url }) => (
                <Link to={url}>{name}</Link>
              ),
            )}
          </SpacedGroup>
        </SpacedGroup>
      </article>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query ProfileQuery {
    site {
      siteMetadata {
        author {
          name
          socialProfiles {
            name
            url
          }
        }
      }
    }
    fileName: file(relativePath: { eq: "bio-cover.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 400, maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
