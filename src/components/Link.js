import styled from 'styled-components'
import { Link } from 'gatsby'
import { Location } from '@reach/router'

const sharedStyles = () => `
  color: white;
`

const InternalLink = styled(Link)`
  ${sharedStyles}
`
const Anchor = styled.a`
  ${sharedStyles}
`
const ExternalLink = ({ children, to, ...other }) => (
  <Anchor href={to} {...other}>
    {children}
  </Anchor>
)

const isExternalLink = new RegExp(/^https?/)

const ApplicationLink = ({ children, to, ...rest }) => {
  const isRouteMatch = new RegExp(`${to}$`)

  return isExternalLink.test(to) ? (
    <ExternalLink to={to} {...rest}>
      {children}
    </ExternalLink>
  ) : (
    <Location>
      {({ location }) => {
        return (
          <InternalLink
            to={to}
            isCurrent={isRouteMatch.test(location.href)}
            {...rest}
          >
            {children}
          </InternalLink>
        )
      }}
    </Location>
  )
}
export default ApplicationLink
