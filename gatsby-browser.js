exports.onRouteUpdate = ({location}) => {
  if (location.hash === '') {
    setTimeout(() => {
      const scrollDoc = document.querySelector('main').parentElement;
      scrollDoc.scrollTo(0, 0);
    }, 0);
  } else {
    setTimeout(() => {
      const scrollDoc = document.querySelector('main').parentElement;
      const hashElement = document.querySelector(location.hash);
      scrollDoc.scrollTo(0, hashElement.offsetTop);
    }, 0);
  }
};
