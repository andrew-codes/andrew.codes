import Img from 'gatsby-image'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Link from './Link'
import SpacedGroup from './SpacedGroup'
import Typography from './Typography'
import WithBreakpoint from './WithBreakpoint'

const Nav = styled.nav`
  align-items: center;
  display: flex;

  a {
  }
`

const LogoContainer = styled.div`
  flex: 1;
  display: flex !important;
  align-items: center;
`

const LogoLink = styled(Link)`
  text-decoration: none;
`

const Logo = styled.div`
  border-radius: 24px;
  width: 100px;
  height: 100px;
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

const ProfileLink = styled(Link)`
  font-size: 14px;
  text-transform: lowercase;
  letter-spacing: 2px;
  text-decoration: underline;
  z-index: 5;
`

const GlobaNavLink = styled(Link)`
  font-weight: ${({ breakpoint }) =>
    WithBreakpoint.isBreakpointUp('md', breakpoint) ? '700' : '400'};
  font-size: 18px;
  border-radius: 8px;
  background: rgb(34, 35, 39);
  position: relative;
  z-index: 1;
  padding: 8px;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;

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
          author {
            socialProfiles {
              name
              url
            }
          }
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
    <WithBreakpoint>
      {(breakpoint) => (
        <SpacedGroup
          noGutters
          as={Nav}
          direction={
            WithBreakpoint.isBreakpointUp('md', breakpoint)
              ? 'horizontal'
              : 'vertical'
          }
          spacing={WithBreakpoint.isBreakpointUp('md', breakpoint) ? 16 : 0}
        >
          <SpacedGroup
            noGutters
            as={LogoContainer}
            spacing={WithBreakpoint.isBreakpointUp('md', breakpoint) ? 24 : 0}
            to="/"
          >
            {WithBreakpoint.isBreakpointUp('xs', breakpoint, false) && (
              <LogoLink>
                <Logo>
                  <Img fixed={data.fileName.childImageSharp.fixed} />
                </Logo>
              </LogoLink>
            )}
            <SpacedGroup noGutters direction="vertical" spacing={0}>
              <SiteTitle>{data.site.siteMetadata.title}</SiteTitle>
              <Subtitle>{data.site.siteMetadata.subtitle}</Subtitle>
              <SpacedGroup noGutters spacing={16}>
                {data.site.siteMetadata.author.socialProfiles.map(
                  ({ name, url }) => (
                    <ProfileLink to={url}>{name}</ProfileLink>
                  ),
                )}
              </SpacedGroup>
            </SpacedGroup>
          </SpacedGroup>
          <SpacedGroup>
            <GlobaNavLink breakpoint={breakpoint} to="/profile">
              Profile
            </GlobaNavLink>
            <GlobaNavLink breakpoint={breakpoint} to="https://jas.link/resume">
              Resume
            </GlobaNavLink>
            <GlobaNavLink breakpoint={breakpoint} to="/">
              Articles
            </GlobaNavLink>
          </SpacedGroup>
        </SpacedGroup>
      )}
    </WithBreakpoint>
  )
}

export default GlobalNavigation
