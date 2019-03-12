import React, { Fragment } from 'react'
import Seo from './Seo'
import { StyleProvider, styleUtils, WithRenderer } from './StyleProvider'
import { Paper } from './Paper'
import Border from './Border'
import { Box } from './Box'
import WindowResizeListener from './WindowResizeListener'
import createComponent from './StyleProvider/createComponent'

const Main = createComponent(() => ({ width: '100%' }), 'main')

const Layout = ({ children }) => (
  <StyleProvider>
    <Fragment>
      <WithRenderer>
        {renderer => {
          renderer.renderStatic(
            {
              '--x-height-multiplier': '0.375',
              '--baseline-multiplier': '0.17',
              color: 'rgba(0,0,0,.84)',
              fontFamily:
                'medium-content-serif-font,Georgia,Cambria,"Times New Roman",Times,serif',
              fontSize: 21,
              fontWeight: 400,
              '-webkit-font-smoothing': 'antialiased;',
              lineHeight: 1.58,
              letterSpacing: '-.003em',
              margin: 0,
              outline: 0,
              textRendering: 'optimizeLegibility',
              wordBreak: 'break-word',
              wordWrap: ' break-word',
            },
            'body',
          )
        }}
      </WithRenderer>
      <Seo />
      <Box maxWidth={960} {...styleUtils.margin(0, 'auto')}>
        <WindowResizeListener>
          {({ width }) => (
            <Border
              radial
              left
              right
              color="#111"
              width={width > 1006 ? 16 : 0}
            >
              <Main>
                <Paper>
                  <Box padding="64px 16px">{children}</Box>
                </Paper>
              </Main>
            </Border>
          )}
        </WindowResizeListener>
      </Box>
    </Fragment>
  </StyleProvider>
)
export default Layout
