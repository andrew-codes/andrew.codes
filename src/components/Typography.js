import React, { Component } from 'react'
import createComponent from './StyleProvider/createComponent'

class Typography extends Component {
  constructor(props) {
    super(props)
    this.Component = createComponent(
      ({ as, theme }) => ({
        ...theme.Typography[as],
      }),
      props.as,
    )
  }
  render() {
    const { as, children } = this.props
    return <this.Component as={as}>{children}</this.Component>
  }
}
export default Typography
