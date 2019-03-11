import React, { Component } from 'react'
import EventListener from 'react-event-listener'

class WindowResizeListener extends Component {
  constructor() {
    super()
    this.state = {
      height: typeof window !== 'undefined' ? window.innerHeight : 0,
      width: typeof window !== 'undefined' ? window.innerWidth : 0,
    }
  }
  render() {
    const { children } = this.props
    return (
      <EventListener
        target={typeof window !== 'undefined' ? window : 'window'}
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
