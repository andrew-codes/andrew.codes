import styled from 'styled-components'

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
export default Typography
