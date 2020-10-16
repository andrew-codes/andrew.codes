module.exports.onRouteUpdate = ({ location }) => {
  const mainSelector = document.querySelector('main')
  if (!mainSelector) {
    return
  }
  let scrollToValue = 0
  if (location.hash !== '') {
    const hashElement = document.querySelector(
      `#${location.hash.replace('#', '')}`,
    )
    if (!hashElement) {
      return
    }
    scrollToValue = hashElement.offsetTop - 32
    setTimeout(() => {
      window.scrollTo(0, scrollToValue)
    }, 0)
  }
}
