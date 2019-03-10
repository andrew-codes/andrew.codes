import React, { Component, Fragment } from 'react'
import { Link } from 'gatsby'
import { Location } from '@reach/router'
import { StyleProvider, createComponent, styleUtils } from './StyleProvider'

const LinkImpl = createComponent(
  ({ isCurrent, theme }) => ({
    color: theme.Link.color,
    textDecoration: 'none',
    ...styleUtils.conditionalStyles(isCurrent, theme.Link.current),
  }),
  Link,
  ['to'],
)
const Anchor = createComponent(
  ({ theme }) => ({
    color: theme.Link.color,
    textDecoration: 'none',
  }),
  'a',
  ['href'],
)
const AnchorLink = ({ children, to, ...other }) => (
  <Anchor href={to} {...other}>
    {children}
  </Anchor>
)

class StyledLink extends Component {
  constructor() {
    super()
    this.state = {
      isCurrent: false,
    }
  }

  render() {
    const { children, to } = this.props
    const isRouteMatch = new RegExp(`${to}$`)
    const isExternalLink = new RegExp(/^https?/)

    return (
      <StyleProvider>
        <Fragment>
          {isExternalLink.test(to) && (
            <AnchorLink to={to}>{children}</AnchorLink>
          )}
          {!isExternalLink.test(to) && (
            <Location>
              {({ location }) => {
                return (
                  <LinkImpl
                    to={to}
                    isCurrent={isRouteMatch.test(location.href)}
                  >
                    {children}
                  </LinkImpl>
                )
              }}
            </Location>
          )}
        </Fragment>
      </StyleProvider>
    )
  }
}
export default StyledLink
