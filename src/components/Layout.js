import React, { Fragment } from 'react'
import Seo from './Seo'
import { StyleProvider, styleUtils, WithRenderer } from './StyleProvider'
import { Paper } from './Paper'
import Border from './Border'
import { Box } from './Box'
import WindowResizeListener from './WindowResizeListener'

const Layout = ({ children }) => (
  <StyleProvider>
    <Fragment>
      <WithRenderer>
        {renderer => {
          renderer.renderStatic({ margin: 0 }, 'body')
        }}
      </WithRenderer>
      <Seo />
      <Box maxWidth={960} {...styleUtils.margin(0, 'auto')}>
        <WindowResizeListener>
          {({ width }) => (
            <Border radial left right width={width > 1006 ? 16 : 0}>
              <main>
                <Paper>
                  <Box padding={16}>{children}</Box>
                </Paper>
              </main>
            </Border>
          )}
        </WindowResizeListener>
      </Box>
    </Fragment>
  </StyleProvider>
)
export default Layout
