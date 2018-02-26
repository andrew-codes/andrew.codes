import classNames from "classnames";
import React from "react";
import Typography from "material-ui/Typography";
import { withStyles } from "material-ui/styles";
import SimpleList from "../SimpleList";

const styles = theme => ({
  section: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
    marginBottom: 3 * theme.spacing.unit,
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse"
    }
  },
  main: {
    flex: 1
  },
  aside: {
    minWidth: "125px"
  }
});

const DatedResumeEntry = ({
  classes,
  name,
  from,
  description,
  details,
  environment,
  timespan,
  title,
  to
}) => (
  <section className={classNames("dated-resume-section", classes.section)}>
    <div className="main">
      <div className="print-only">
        <Typography className={classes.aside} type="body2">
          <time>{from}</time>
          {timespan && (
            <span>
              {" "}
              - <time>{to || "present"}</time>
            </span>
          )}
        </Typography>
      </div>
      <Typography type="headline">{name}</Typography>
      {title && <Typography type="subheading">{title}</Typography>}
      <Typography type="body1" gutterBottom>
        {description}
      </Typography>
      {details.length > 0 && (
        <div>
          <Typography type="subheading">Role Details</Typography>
          <SimpleList items={details} />
        </div>
      )}
      {environment.length > 0 && (
        <div>
          <Typography type="subheading">Environment</Typography>
          <SimpleList items={environment} />
        </div>
      )}
    </div>
    <Typography
      className={classNames(classes.aside, "print-hidden")}
      type="body2"
    >
      <time>{from}</time>
      {timespan && (
        <span>
          {" "}
          - <time>{to || "present"}</time>
        </span>
      )}
    </Typography>
  </section>
);

DatedResumeEntry.defaultProps = {
  details: [],
  environment: [],
  timespan: true
};
export default withStyles(styles)(DatedResumeEntry);
