import PropTypes from 'prop-types'
import React from 'react'
import { StyleProvider, createComponent } from './StyleProvider'

const PaperImpl = createComponent(
  ({ theme }) => ({
    backgroundColor: theme.Paper.color,
    width: '100%',
  }),
  'div',
  ['data-component', 'data-test'],
)

const Paper = props => (
  <StyleProvider>
    <PaperImpl {...props} data-component="Paper" />
  </StyleProvider>
)
Paper.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,
}
Paper.defaultProps = {}
export { Paper }
