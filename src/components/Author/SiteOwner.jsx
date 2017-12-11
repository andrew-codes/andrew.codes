import React from 'react';
import Author from './';
import Link from '../Link';
import config from '../../../data/SiteConfig';

const SiteOwnerAuthor = () => (
  <Author
    avatarUrl={config.userAvatar}
    fullName={config.userName}
    links={config.userLinks}
    bio={(<span><Link to="/tags/presentation">speaker</Link>, <Link to="/tags/workshop">trainer</Link>, <Link to="http://jas.link/github">OSS contributor</Link>; lifelong learner</span>)}
  />
);

export default SiteOwnerAuthor;
