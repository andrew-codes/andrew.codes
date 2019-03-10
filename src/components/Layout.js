import React, { Fragment } from 'react'
import Seo from './Seo'
import {
  createComponent,
  StyleProvider,
  styleUtils,
  WithRenderer,
} from './StyleProvider'
import { Paper } from './Paper'
import Border from './Border'

const Box = createComponent(({ ...other }) => ({ ...other }), 'div')
const FixedContainer = createComponent(
  ({ below, width, ...other }) => ({
    position: 'fixed',
    width,
    ...styleUtils.conditionalStyle(below, 'zIndex', '-1'),
    ...other,
  }),
  'div',
)

const Fixed = ({ below, children, width, ...other }) => (
  <FixedContainer below={below} width={width} {...other}>
    {children}
  </FixedContainer>
)

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
        <Border radial left right width={16}>
          <main>
            <Paper>
              <Box padding={16}>{children}</Box>
            </Paper>
          </main>
        </Border>
      </Box>
    </Fragment>
  </StyleProvider>
)
export default Layout
