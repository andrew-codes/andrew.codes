import React, { Fragment } from 'react'
import Seo from './Seo'
import { StyleProvider } from './StyleProvider'

const Layout = ({ children }) => (
  <StyleProvider>
    <Fragment>
      <Seo />
      <main>{children}</main>
    </Fragment>
  </StyleProvider>
)
export default Layout
