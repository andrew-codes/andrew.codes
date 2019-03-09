import PropTypes from 'prop-types'
import React from 'react'
import { createComponent, StyleProvider } from './StyleProvider'

const Root = createComponent(
  () => ({
    maxWidth: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }),
  'div',
)

const Clamp = ({ children }) => (
  <StyleProvider>
    <Root>{children}</Root>
  </StyleProvider>
)
Clamp.propTypes = {
  /** Content to clamp. */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
}

export default Clamp
