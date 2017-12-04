import React from "react";
import Helmet from "react-helmet";
import Sidebar from 'react-sidebar';
import Author from '../components/Author';
import config from "../../data/SiteConfig";
import "./index.css";

const mql = window.matchMedia(`(min-width: 800px)`);

export default class MainLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mql,
      docked: props.docked,
      open: props.open
    };
    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.setSidebarOpen = this.setSidebarOpen.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
    this.setState({
      mql,
      docked: mql.matches,
    });
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  getLocalTitle() {
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const currentPath = getCurrentPath(this.props.location.pathname, config.pathPrefix);
    let title = "";
    if (currentPath === "") {
      title = "Home";
    } else if (currentPath === "tags/") {
      title = "Tags";
    } else if (currentPath === "categories/") {
      title = "Categories";
    } else if (currentPath === "about/") {
      title = "About";
    } else if (currentPath.includes("posts")) {
      title = "Article";
    } else if (currentPath.includes("tags/")) {
      const tag = currentPath
        .replace("tags/", "")
        .replace("/", "")
        .replace("-", " ");
      title = `Tagged in ${capitalize(tag)}`;
    } else if (currentPath.includes("categories/")) {
      const category = currentPath
        .replace("categories/", "")
        .replace("/", "")
        .replace("-", " ");
      title = `${capitalize(category)}`;
    }
    return title;
  }

  render() {
    const {children} = this.props;
    const {
      open,
      docked,
    } = this.state;
    return (
      <div>
        <Helmet>
          <title>{`${config.siteTitle} |  ${this.getLocalTitle()}`}</title>
          <meta name="description" content={config.siteDescription}/>
        </Helmet>
        <Sidebar
          sidebar={this.renderSidebarContent()}
          open={open}
          docked={docked}
          onSetOpen={this.onSetSidebarOpen}
        >
          <main>
            {!docked && renderAuthor(config)}
            {children()}
          </main>
        </Sidebar>

      </div>
    );
  }

  setSidebarOpen(open) {
    this.setState({
      open,
    });
  }

  mediaQueryChanged() {
    this.setState({
      docked: this.state.mql.matches,
    });
  }

  renderSidebarContent() {
    return (
      <aside className="sidebar">
        <header>
          {renderAuthor(config)}
        </header>
      </aside>
    );
  }
}

function getCurrentPath(pathname, pathPrefix) {
  return pathname
    .replace(pathPrefix || '/', '')
    .replace('/', '');
}

function renderAuthor({
                        userAvatar,
                        userDescription,
                        userName,
                        userLinks,
                      }) {
  return (
    <Author
      avatarUrl={userAvatar}
      bio={userDescription}
      fullName={userName}
      links={userLinks}
    />
  )
}
