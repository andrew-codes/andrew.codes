import React from 'react'
import { createComponent, StyleProvider } from './StyleProvider'

const BoxImpl = createComponent(styles => styles, 'div')

export const Box = props => (
  <StyleProvider>
    <BoxImpl {...props} />
  </StyleProvider>
)
export const FixedBox = props => <Box {...props} position="fixed" />
