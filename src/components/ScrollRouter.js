import React, { Component } from 'react'
import { createHistory, LocationProvider } from '@reach/router'
const history = createHistory(window)
class ScrollRouter extends Component {
  constructor(props) {
    super(props)
    this.state = { activeId: `#${props.routes[0]}` }
    this.scrollListener = this.scrollListener.bind(this)
  }
  componentDidMount() {
    window.addEventListener('scroll', this.scrollListener)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollListener)
  }

  componentDidUpdate(prevProps, prevState) {
    // const { key } = this.props.location
    // if (!scrollPositions[key]) {
    //   window.scrollTo(0, 0)
    // } else {
    //   window.scrollTo(0, scrollPositions[key])
    // }
  }

  scrollListener() {
    const { routes } = this.props
    const routeElements = Array.from(
      document.querySelectorAll('[id]'),
    ).filter((el) => routes.includes(`#${el.id}`))
    const firstInView = routeElements.find(
      (el) => el.getBoundingClientRect().top > 0,
    )
    if (!firstInView) {
      return
    }
    if (firstInView.id !== this.state.activeId) {
      this.setState(
        {
          activeId: firstInView.id,
        },
        () => {
          window.history.pushState(null, null, `#${firstInView.id}`)

          // history.pushState(null, null, `#${firstInView.id}`)
          // navigate(`#${firstInView.id}`, { replace: true })
        },
      )
    }
    // scrollPositions[this.props.location.key] = window.scrollY
  }

  render() {
    return <LocationProvider history={history} />
  }
}
export default ScrollRouter
