const theme = require('./src/theme');

exports.onRouteUpdate = ({location}) => {
  const mainSelector = document.querySelector('main');
  if (!mainSelector) {
    return;
  }
  let scrollToValue = 0;
  if (location.hash !== '') {
    const hashElement = document.querySelector(`[data-name=${location.hash.replace('#', '')}]`);
    scrollToValue = hashElement.offsetTop - 32;
    if (window.innerWidth < theme.breakpoints.values.md) {
      scrollToValue -= theme.mixins.toolbar.minHeight;
    }
    setTimeout(() => {
      window.scrollTo(0, scrollToValue);
    }, 0);
  }
};
