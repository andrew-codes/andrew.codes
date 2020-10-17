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
    text-decoration: none;
    display: inline-block;
  }
`

const LogoLink = styled(Link)`
  flex: 1;
  display: flex !important;
  align-items: center;
`

const Logo = styled(Img)`
  border-radius: 24px;
`

const SiteTitle = styled.span`
  font-size: 28px;
  letter-spacing: 1px;
`

const Subtitle = styled.span`
  font-size: 14px;
  text-transform: lowercase;
  letter-spacing: 2px;
`

const GlobaNavLink = styled(Link)`
  font-weight: 700;
  font-size: 20px;
  border-radius: 8px;
  background: rgb(34, 35, 39);
  position: relative;
  z-index: 1;
  padding: 8px;
  letter-spacing: 2px;

  &:before {
    border-radius: inherit;
    background: linear-gradient(45deg, #327ae7, #6bd0ff);
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    transition: opacity 0.45s;
    z-index: -1;
  }

  &:hover {
    &:before {
      opacity: 1;
    }
  }
`

const GlobalNavigation = () => {
  const data = useStaticQuery(graphql`
    query GlobalNavigationQuery {
      site {
        siteMetadata {
          title
          subtitle
        }
      }
      fileName: file(relativePath: { eq: "Profile400px.png" }) {
        childImageSharp {
          fixed(height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <SpacedGroup noGutters as={Nav} spacing={16}>
      <SpacedGroup noGutters as={LogoLink} spacing={24} to="/">
        <Logo fixed={data.fileName.childImageSharp.fixed} />{' '}
        <SpacedGroup noGutters direction="vertical" spacing={0}>
          <SiteTitle>{data.site.siteMetadata.title}</SiteTitle>
          <Subtitle>{data.site.siteMetadata.subtitle}</Subtitle>
        </SpacedGroup>
      </SpacedGroup>
      <GlobaNavLink to="/profile">Profile</GlobaNavLink>
      <GlobaNavLink to="https://jas.link/resume">Resume</GlobaNavLink>
      <GlobaNavLink to="/">Articles</GlobaNavLink>
    </SpacedGroup>
  )
}

export default GlobalNavigation
