import AppBar from 'material-ui/AppBar';
import classNames from 'classnames';
import CloseIcon from 'material-ui-icons/Close';
import Collapse from 'material-ui/transitions/Collapse';
import Drawer from 'material-ui/Drawer';
import Helmet from "react-helmet";
import Hidden from 'material-ui/Hidden';
import IconButton from 'material-ui/IconButton';
import List, {ListItem, ListItemText} from 'material-ui/List';
import MenuIcon from 'material-ui-icons/Menu';
import PropTypes from 'prop-types';
import React from "react";
import Toolbar from 'material-ui/Toolbar';
import {MuiThemeProvider, createMuiTheme, withStyles} from 'material-ui/styles';
import 'typeface-roboto/index.css';
import Author from "../components/Author";
import config from "../../data/SiteConfig";
import resumeSections from '../resumeSections';
import './index.css';

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

const drawerWidth = 300;
const sidebarStyles = theme => ({
  aside: {
    width: `${drawerWidth}px`,
  },
  link: {
    flex: 1,
  },
  listItem: {
    display: 'flex',
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  }
});
const renderSidebarContent = ({
                                classes,
                                currentPath
                              }, {
                                router,
                              }) => (
  <aside className={classes.aside}>
    <header>{renderAuthor(config)}</header>
    <nav>
      <List>
        <ListItem button className={classes.listItem} onClick={() => router.history.push('/')}>
          <ListItemText primary="Articles" />
        </ListItem>
        <ListItem button className={classes.listItem} onClick={() => router.history.push('/resume')}>
          <ListItemText primary="Resume" />
        </ListItem>
        {currentPath === 'resume' && (
          <Collapse component="li" in={true} timeout="auto">
            <List disablePadding>
              {resumeSections.map((section, index) => (
                <ListItem button className={classNames(classes.listItem, classes.nested)}
                          onClick={() => router.history.push(`/resume/#${section.slug}`)}>
                  <ListItemText primary={section.heading} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        )}
        {currentPath !== 'resume' && (
          <ListItem button className={classes.listItem} onClick={() => router.history.push('/resume/#Contact')}>
            <ListItemText primary="Contact" />
          </ListItem>
        )}
      </List>
    </nav>
  </aside>
);
renderSidebarContent.contextTypes = {
  router: PropTypes.object.isRequired,
};
const SideBarContent = withStyles(sidebarStyles)(renderSidebarContent);

const mainLayoutStyles = theme => ({
  authorContainer: {
    marginTop: `${theme.mixins.toolbar.minHeight}px`,
  },
  drawerPaper: {
    border: '1px solid rgba(0, 0, 0, 0.12)',
  },
  main: {
    padding: '1rem',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      marginLeft: `${drawerWidth}px`
    },
  },
  root: {
    display: 'flex',
    position: 'relative',
    height: '100vh',
  }
});

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };

    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
  }

  getLocalTitle(currentPath) {
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    let title = "";
    if (currentPath === "") {
      title = "Articles";
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

  handleDrawerToggle() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    const {
      children,
      classes
    } = this.props;
    const {open} = this.state;
    const currentPath = getCurrentPath(
      this.props.location.pathname,
      config.pathPrefix
    );
    return (
      <div className={classes.root}>
        <Helmet>
          <title>{`${config.siteTitle} |  ${this.getLocalTitle(currentPath)}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <Hidden mdDown implementation="css">
          <Drawer
            open
            anchor="left"
            classes={{
              paper: classes.drawerPaper,
            }}
            type="permanent"
          >
            <SideBarContent currentPath={currentPath} />
          </Drawer>
        </Hidden>
        <Hidden mdUp implementation="css">
          <Drawer
            open={open}
            anchor="left"
            classes={{
              paper: classes.drawerPaper,
            }}
            onRequestClose={this.handleDrawerToggle}
            type="temporary"
          >
            <IconButton
              aria-label="close drawer"
              onClick={this.handleDrawerToggle}
            >
              <CloseIcon />
            </IconButton>
            <SideBarContent currentPath={currentPath} />
          </Drawer>
        </Hidden>
        <main className={classes.main}>
          <Hidden mdUp implementation="css">
            <AppBar>
              <Toolbar>
                <IconButton
                  color="contrast"
                  aria-label="open drawer"
                  onClick={this.handleDrawerToggle}
                >
                  <MenuIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
            <div className={classes.authorContainer}>
              {renderAuthor(config)}
            </div>
          </Hidden>
          {children()}
        </main>
      </div>
    );
  }
}

const MainLayoutWithStyles = withStyles(mainLayoutStyles)(MainLayout);

export default (props) => (
  <MuiThemeProvider theme={theme}>
    <MainLayoutWithStyles {...props} />
  </MuiThemeProvider>
);
