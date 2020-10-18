import styled from 'styled-components'
import WithBreakpoint from './WithBreakpoint/index'

const Typography = ({ as, ...rest }) => {
  const Root = styled(as)`
    position: relative;
    font-size: ${({ variant }) => (variant === 'small' ? '14px' : undefined)};
  `
  return <Root {...rest} />
}
Typography.defaultProps = {
  as: 'span',
}

const BodyCopy = styled.p`
  position: relative;
  letter-spacing: 1px;
  line-height: 1.65;
  margin-bottom: 40px;
  font-size: ${(breakpoint) =>
    WithBreakpoint.isBreakpointDown('xs', breakpoint) ? '18px' : undefined};
`

export default Typography
export { BodyCopy }
