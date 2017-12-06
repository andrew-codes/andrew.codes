import Link from 'gatsby-link';
import Helmet from "react-helmet";
import React from "react";
import Sidebar from "react-sidebar";
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import 'typeface-roboto';
import Author from "../components/Author";
import config from "../../data/SiteConfig";
import resumeSections from '../resumeSections';
import './index.css';
import './filepicker.css';

const mql = window.matchMedia(`(min-width: 800px)`);

const theme = createMuiTheme();

const getCurrentPath = (pathname, pathPrefix) => pathname.replace(pathPrefix || "/", "").replace("/", "");

const renderAuthor = ({userAvatar, userDescription, userName, userLinks}) => (
  <Author
    avatarUrl={userAvatar}
    bio={userDescription}
    fullName={userName}
    links={userLinks}
  />
);

const renderSidebarContent = (currentPath) => (
  <aside className="sidebar">
    <header>{renderAuthor(config)}</header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/resume">Resume</Link>
          {currentPath === 'resume' && (
            <ul>
              {resumeSections.map((section, index) => (
                <li>
                  <Link to={`/resume/#${index === 0 ? '' : section.slug}`}>{section.heading}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </nav>
  </aside>
);

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
      docked: mql.matches
    });
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  getLocalTitle(currentPath) {
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

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

  setSidebarOpen(open) {
    this.setState({
      open
    });
  }

  mediaQueryChanged() {
    this.setState({
      docked: this.state.mql.matches
    });
  }

  render() {
    const {children} = this.props;
    const {open, docked} = this.state;
    const currentPath = getCurrentPath(
      this.props.location.pathname,
      config.pathPrefix
    );
    return (
      <MuiThemeProvider theme={theme}>
      <div>
        <Helmet>
          <title>{`${config.siteTitle} |  ${this.getLocalTitle(currentPath)}`}</title>
          <meta name="description" content={config.siteDescription}/>
        </Helmet>
        <Sidebar
          sidebar={renderSidebarContent(currentPath)}
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
      </MuiThemeProvider>
    );
  }
}
