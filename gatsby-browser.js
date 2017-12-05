exports.onRouteUpdate = ({action, location}) => {
  if (action === 'POP' && location.hash === '') {
    setTimeout(() => {
      document.querySelector('main').parentElement.scrollTo(0, 0);
    }, 0);
  }
};
