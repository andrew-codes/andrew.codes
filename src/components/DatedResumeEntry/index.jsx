import React from 'react';
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';
import SimpleList from "../SimpleList";

const styles = theme => ({
  section: {
    display: 'inline-flex',
    flexDirection: 'row-reverse',
    marginBottom: 3 * theme.spacing.unit,
  },
  main: {
    flex: 1,
  },
  aside: {
    minWidth: '125px',
  },
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
                            to,
                          }) => (
  <section className={classes.section}>
    <div className="main">
      <Typography type="headline">{name}</Typography>
      {title && <Typography type="subheading">{title}</Typography>}
      <Typography type="body1" gutterBottom>{description}</Typography>
      {details.length > 0 && (
        <div>
          <Typography type="subheading">Role Details</Typography>
          <SimpleList items={details}/>
        </div>
      )}
      {environment.length > 0 && (
        <div>
          <Typography type="subheading">Environment</Typography>
          <SimpleList items={environment}/>
        </div>
      )}
    </div>
    <Typography
      className={classes.aside}
      type="body2"
    >
      <time>{from}</time>
      {timespan && (
        <span> - <time>{to || 'present'}</time></span>
      )}
    </Typography>
  </section>
);

DatedResumeEntry.defaultProps = {
  details: [],
  environment: [],
  timespan: true,
};
export default withStyles(styles)(DatedResumeEntry);
