import React from 'react';
import SimpleList from "../SimpleList";

const DatedResumeEntry = ({
                            name,
                            from,
                            description,
                            details,
                            environment,
                            timespan,
                            title,
                            to,
                          }) => (
  <section>
    <h2>{name}</h2>
    <span>
      <time>{from}</time>
      {timespan && (
        <span> - <time>{to || 'present'}</time></span>
      )}
    </span>
    {title && <h3>{title}</h3>}
    <p>{description}</p>
    {details.length > 0 && (
      <div>
        <h4>Role Details</h4>
        <SimpleList items={details}/>
      </div>
    )}
    {environment.length > 0 && (
      <div><h4>Environment</h4>
        <SimpleList items={environment}/>
      </div>
    )}
  </section>
);

DatedResumeEntry.defaultProps = {
  details: [],
  environment: [],
  timespan: true,
};
export default DatedResumeEntry;
