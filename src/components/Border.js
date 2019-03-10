import React from 'react'
import { createComponent, StyleProvider, styleUtils } from './StyleProvider'

const isHorizontal = placement => placement === 'left' || placement === 'right'

const BorderContainer = createComponent(
  () => ({
    position: 'relative',
    width: '100%',
    display: 'flex',
  }),
  'div',
)
const BorderImpl = createComponent(
  ({ placement, width }) => ({
    position: 'absolute',
    zIndex: '-1',
    ...styleUtils.conditionalStyle(isHorizontal(placement), 'width', 100),
    ...styleUtils.conditionalStyle(!isHorizontal(placement), 'height', 100),
    [placement]: -width,
    overflow: 'hidden',
    background: isHorizontal(placement)
      ? `radial-gradient(50% 70%, rgba(0, 0, 0, .25), rgba(255, 255, 255, 0))`
      : `radial-gradient(70% 50%, rgba(0, 0, 0, .25), rgba(255, 255, 255, 0))`,
    ...styleUtils.conditionalStyle(isHorizontal(placement), 'top', 0),
    ...styleUtils.conditionalStyle(!isHorizontal(placement), 'right', 0),
    ...styleUtils.conditionalStyle(isHorizontal(placement), 'bottom', 0),
    ...styleUtils.conditionalStyle(!isHorizontal(placement), 'left', 0),
  }),
  'div',
)
const Border = ({ children, radial, left, right, top, bottom, ...other }) => (
  <StyleProvider>
    <BorderContainer>
      {radial && top && <BorderImpl placement="top" {...other} />}
      {radial && right && <BorderImpl placement="right" {...other} />}
      {radial && bottom && <BorderImpl placement="bottom" {...other} />}
      {radial && left && <BorderImpl placement="left" {...other} />}
      {children}
    </BorderContainer>
  </StyleProvider>
)
export default Border
