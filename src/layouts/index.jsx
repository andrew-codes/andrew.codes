import AppBar from "material-ui/AppBar";
import classNames from "classnames";
import CloseIcon from "material-ui-icons/Close";
import Collapse from "material-ui/transitions/Collapse";
import Drawer from "material-ui/Drawer";
import Helmet from "react-helmet";
import Hidden from "material-ui/Hidden";
import IconButton from "material-ui/IconButton";
import List, { ListItem, ListItemText } from "material-ui/List";
import MenuIcon from "material-ui-icons/Menu";
import Paper from "material-ui/Paper";
import PropTypes from "prop-types";
import React from "react";
import Toolbar from "material-ui/Toolbar";
import { MuiThemeProvider, withStyles } from "material-ui/styles";
import "typeface-roboto/index.css";
import SiteOwner from "../components/Author/SiteOwner";
import config from "../../data/SiteConfig";
import FullHeightPaper from "../components/FullHeightPaper";
import resumeSections from "../../data/resumeSections";
import theme from "../theme";
import "./index.css";
import "./print.css";

const getCurrentPath = (pathname, pathPrefix) =>
  pathname.replace(pathPrefix || "/", "").replace("/", "");

const drawerWidth = 300;
const sidebarStyles = () => ({
  aside: {
    backgroundColor: "#f7f7f7",
    width: `${drawerWidth}px`
  },
  link: {
    flex: 1
  },
  listItem: {
    display: "flex"
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
});
const renderSidebarContent = ({ classes, currentPath }, { router }) => (
  <aside className={classes.aside}>
    <header>
      <SiteOwner />
    </header>
    <nav>
      <List>
        <ListItem
          button
          className={classes.listItem}
          onClick={() => router.history.push("/")}
        >
          <ListItemText primary="Articles" />
        </ListItem>
        <ListItem
          button
          className={classes.listItem}
          onClick={() => router.history.push("/tags/presentation")}
        >
          <ListItemText primary="Talks" />
        </ListItem>
        <ListItem
          button
          className={classes.listItem}
          onClick={() => router.history.push("/tags/workshop")}
        >
          <ListItemText primary="Workshops" />
        </ListItem>
        <ListItem
          button
          className={classes.listItem}
          onClick={() => router.history.push("/resume")}
        >
          <ListItemText primary="Resume" />
        </ListItem>
        {currentPath === "resume" && (
          <Collapse in component="li" timeout="auto">
            <List disablePadding>
              {resumeSections.map(section => (
                <ListItem
                  button
                  className={classNames(classes.listItem, classes.nested)}
                  key={section.slug}
                  onClick={() =>
                    router.history.push(`/resume/#${section.slug}`)
                  }
                >
                  <ListItemText primary={section.heading} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        )}
        <ListItem
          button
          className={classes.listItem}
          onClick={() => router.history.push("/contact")}
        >
          <ListItemText primary="Contact" />
        </ListItem>
        <ListItem
          button
          className={classes.listItem}
          onClick={() => (window.location = "http://andrew.codes/rss.xml")}
        >
          <ListItemText primary="Subscribe" />
        </ListItem>
      </List>
    </nav>
  </aside>
);
renderSidebarContent.contextTypes = {
  router: PropTypes.object.isRequired
};
const SideBarContent = withStyles(sidebarStyles)(renderSidebarContent);

const mainLayoutStyles = () => ({
  authorContainer: {
    margin: `${theme.mixins.toolbar.minHeight +
      theme.spacing.unit * 4}px ${theme.spacing.unit * 2}px ${theme.spacing
      .unit * 2}px ${theme.spacing.unit * 2}px`,
    padding: `${theme.spacing.unit * 2}px`
  },
  main: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      marginLeft: `${drawerWidth + theme.spacing.unit * 6}px`
    }
  },
  mobilePaper: {
    backgroundColor: "#f7f7f7",
    padding: `${theme.spacing.unit}px`
  },
  paper: {
    paddingRight: 0
  },
  root: {
    display: "flex",
    position: "relative",
    height: "100vh"
  }
});

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
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
      open: !this.state.open
    });
  }

  render() {
    const { children, classes } = this.props;
    const { open } = this.state;
    const currentPath = getCurrentPath(
      this.props.location.pathname,
      config.pathPrefix
    );
    return (
      <div className={classes.root}>
        <Helmet>
          <title>{`${config.siteTitle} |  ${this.getLocalTitle(
            currentPath
          )}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <Hidden mdDown implementation="css">
          <Drawer open anchor="left" type="permanent">
            <FullHeightPaper
              backgroundColor="#f7f7f7"
              className={classes.paper}
            >
              <SideBarContent currentPath={currentPath} />
            </FullHeightPaper>
          </Drawer>
        </Hidden>
        <Hidden mdUp implementation="css">
          <Drawer
            open={open}
            anchor="left"
            classes={{
              paper: classes.mobilePaper
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
        <main
          className={classNames(
            classes.main,
            "print-no-spacing",
            "print-no-decoration"
          )}
        >
          <Hidden mdUp implementation="css">
            <AppBar className="print-hidden">
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
            <Paper
              className={classNames(
                classes.authorContainer,
                "print-no-spacing",
                "print-no-decoration"
              )}
            >
              <SiteOwner />
            </Paper>
          </Hidden>
          {children()}
        </main>
      </div>
    );
  }
}

const MainLayoutWithStyles = withStyles(mainLayoutStyles)(MainLayout);

export default props => (
  <MuiThemeProvider theme={theme}>
    <MainLayoutWithStyles {...props} />
  </MuiThemeProvider>
);
