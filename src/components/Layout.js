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
          renderer.renderStatic(
            {
              '--margin-top-multiplier': 0,
              fontSize: 42,
              fontWeight: 400,
              lineHeight: 1.25,
              marginTop: 0,
            },
            'h1',
          )
          renderer.renderStatic(
            {
              '--margin-top-multiplier': 0,
              '--x-height-multiplier': '0.342',
              '--baseline-multiplier': '0.22',
              fontFamily:
                'medium-content-sans-serif-font,"Lucida Grande","Lucida Sans Unicode","Lucida Sans",Geneva,Arial,sans-serif',
              fontSize: 34,
              fontStyle: 'normal',
              fontWeight: 600,
              letterSpacing: '-0.045em',
              lineHeight: 1.15,
              ...styleUtils.margin(56, 0, 0, 0),
            },
            'h2',
          )
          renderer.renderStatic(
            {
              backgroundColor: 'transparent',
              backgroundImage:
                'linear-gradient(to right,rgba(0,0,0,.84) 100%,rgba(0,0,0,0) 0)',
              backgroundImage:
                'linear-gradient(to right,currentColor 100%,currentColor 0)',
              backgroundRepeat: 'repeat-x',
              backgroundSize: '1px 1px',
              backgroundPosition: '0 1.05em',
              backgroundPosition: '0 calc(1em + 1px)',
              outline: 0,
              textDecoration: 'none',
            },
            'a[href]',
          )
          renderer.renderStatic(
            {
              background: 'none',
              fontFamily:
                'medium-content-sans-serif-font,"Lucida Grande","Lucida Sans Unicode","Lucida Sans",Geneva,Arial,sans-serif!important',
              fontSize: 14,
            },
            'nav a[href]',
          )
          renderer.renderStatic(
            {
              borderLeft: '5px solid #999',
              paddingLeft: '24px',
            },
            'blockquote',
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
