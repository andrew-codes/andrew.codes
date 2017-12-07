import classNames from 'classnames';
import Collapse from 'material-ui/transitions/Collapse';
import Helmet from "react-helmet";
import Link from 'gatsby-link';
import List, {ListItem, ListItemText} from 'material-ui/List';
import PropTypes from 'prop-types';
import React from "react";
import Sidebar from "react-sidebar";
import {MuiThemeProvider, createMuiTheme, withStyles} from 'material-ui/styles';
import 'typeface-roboto';
import Author from "../components/Author";
import config from "../../data/SiteConfig";
import resumeSections from '../resumeSections';
import './index.css';

const mql = window.matchMedia(`(min-width: 800px)`);

const theme = createMuiTheme();

const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  listItem: {
    display: 'flex',
  },
  link: {
    flex: 1,
  }
});

const getCurrentPath = (pathname, pathPrefix) => pathname.replace(pathPrefix || "/", "").replace("/", "");

const renderAuthor = ({userAvatar, userDescription, userName, userLinks}) => (
  <Author
    avatarUrl={userAvatar}
    bio={userDescription}
    fullName={userName}
    links={userLinks}
  />
);

const renderSidebarContent = ({
                                classes,
                                currentPath
                              }, {
                                router,
                              }) => (
  <aside className="sidebar">
    <header>{renderAuthor(config)}</header>
    <nav>
      <List>
        <ListItem button className={classes.listItem} onClick={() => router.history.push('/')}>
          <ListItemText primary="Home"/>
        </ListItem>
        <ListItem button className={classes.listItem} onClick={() => router.history.push('/resume')}>
          <ListItemText primary="Resume"/>
        </ListItem>
        {currentPath === 'resume' && (
          <Collapse component="li" in={true} timeout="auto">
            <List disablePadding>
              {resumeSections.map((section, index) => (
                <ListItem button className={classNames(classes.listItem, classes.nested)}
                          onClick={() => router.history.push(`/resume/#${section.slug}`)}>
                  <ListItemText primary={section.heading}/>
                </ListItem>
              ))}
            </List>
          </Collapse>
        )}
        {currentPath !== 'resume' && (
          <ListItem button className={classes.listItem} onClick={() => router.history.push('/resume/#Contact')}>
            <ListItemText primary="Contact"/>
          </ListItem>
        )}
      </List>
    </nav>
  </aside>
);
renderSidebarContent.contextTypes = {
  router: PropTypes.object.isRequired,
};
const SideBarContent = withStyles(styles)(renderSidebarContent);

class MainLayout extends React.Component {
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
            sidebar={<SideBarContent currentPath={currentPath}/>}
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

export default MainLayout;
