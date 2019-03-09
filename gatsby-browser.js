const { getRenderer } = require("./src/components/StyleProvider");
const { rehydrate } = require("fela-dom");
require("@babel/polyfill");

exports.onRouteUpdate = ({ location }) => {
  const mainSelector = document.querySelector("main");
  if (!mainSelector) {
    return;
  }
  let scrollToValue = 0;
  if (location.hash !== "") {
    const hashElement = document.querySelector(
      `#${location.hash.replace("#", "")}`
    );
    if (!hashElement) {
      return;
    }
    scrollToValue = hashElement.offsetTop - 32;
    setTimeout(() => {
      window.scrollTo(0, scrollToValue);
    }, 0);
  }
};

module.exports.wrapRootElement = ({ element }) => {
  const renderer = getRenderer({});
  rehydrate(renderer);
  return element;
};
