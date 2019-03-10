import React, { Component } from 'react'
import EventListener from 'react-event-listener'

class WindowResizeListener extends Component {
  constructor() {
    super()
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth,
    }
  }
  render() {
    const { children } = this.props
    return (
      <EventListener
        target={window}
        onResize={evt =>
          this.setState({
            height: evt.target.innerHeight,
            width: evt.target.innerWidth,
          })
        }
      >
        {children(this.state)}
      </EventListener>
    )
  }
}
export default WindowResizeListener
