import Img from 'gatsby-image'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Link from './Link'
import SpacedGroup from './SpacedGroup'

const Nav = styled.nav`
  align-items: center;
  display: flex;

  > a {
    text-transform: uppercase;
    display: inline-block;
  }
`

const LogoLink = styled(Link)`
  flex: 1;
`

const Logo = styled(Img)`
  border-radius: 24px;
`

const GlobalNavigation = () => {
  const data = useStaticQuery(graphql`
    query GlobalNavigationQuery {
      fileName: file(relativePath: { eq: "Profile400px.png" }) {
        childImageSharp {
          fixed(height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <SpacedGroup as={Nav} spacing={8}>
      <LogoLink to="/profile">
        <Logo fixed={data.fileName.childImageSharp.fixed} />
      </LogoLink>
      <Link to="/profile">Profile</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/">Articles</Link>
    </SpacedGroup>
  )
}

export default GlobalNavigation
