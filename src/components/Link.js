import React, { Component, Fragment } from 'react'
import { Link } from 'gatsby'
import { Location } from '@reach/router'
import { StyleProvider, createComponent, styleUtils } from './StyleProvider'

const linkStyles = ({ theme }) => {
  const { current, ...rest } = theme.Link
  return {
    backgroundColor: 'transparent',
    backgroundImage:
      'linear-gradient(to right,rgba(0,0,0,.84) 100%,rgba(0,0,0,0) 0)',
    backgroundImage:
      'linear-gradient(to right,currentColor 100%,currentColor 0)',
    backgroundRepeat: 'repeat-x',
    backgroundSize: '1px 1px',
    backgroundPosition: '0 1.05em',
    backgroundPosition: '0 calc(1em + 1px)',
    outline: 0,
    textDecoration: 'none',
    ...rest,
  }
}

const LinkImpl = createComponent(
  ({ isCurrent, theme }) => ({
    ...linkStyles({ theme }),
    ...styleUtils.conditionalStyles(isCurrent, theme.Link.current),
  }),
  Link,
  ['to'],
)
const Anchor = createComponent(
  ({ theme }) => ({
    ...linkStyles({ theme }),
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
