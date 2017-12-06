exports.onRouteUpdate = ({location}) => {
  const mainSelector = document.querySelector('main');
  if (!mainSelector) {
    return;
  }
  if (location.hash === '') {
    setTimeout(() => {
      const scrollDoc = mainSelector.parentElement;
      scrollDoc.scrollTo(0, 0);
    }, 0);
  } else {
    setTimeout(() => {
      const scrollDoc = mainSelector.parentElement;
      const hashElement = document.querySelector(location.hash);
      scrollDoc.scrollTo(0, hashElement.offsetTop);
    }, 0);
  }
};
