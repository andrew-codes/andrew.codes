import React from 'react'
import Author from './'
import Link from '../Link'
import config from '../../../data/SiteConfig'

const SiteOwnerAuthor = props => (
  <Author
    {...props}
    address={
      <span>
        915 West Peachtree Street
        <br />
        Atlanta, GA 30309
      </span>
    }
    avatarUrl={config.userAvatar}
    bio={
      <span>
        <Link to="/tags/presentation">speaker</Link>,{' '}
        <Link to="/tags/workshop">trainer</Link>,{' '}
        <Link to="http://jas.link/github">OSS contributor</Link>; lifelong
        learner
      </span>
    }
    email="andrew@andrew.codes"
    fullName={config.userName}
    links={config.userLinks}
    phone="(470) 535-9093"
  />
)

export default SiteOwnerAuthor
