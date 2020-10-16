import * as React from 'react'
import styled from 'styled-components'

const computeInnerSpacing = (spacing) => {
  return `${spacing / 2}px`
}
const computeOuterSpacing = (spacing) => {
  return `${spacing}px`
}

const Direction = {
  horizontal: 'horizontal',
  vertical: 'vertical',
}

const SpacedGroup = ({ as, ...rest }) => {
  const Root = styled(as).attrs({ centered: '' })`
    display: flex;
    padding: 0;
    width: ${({ spread }) => (spread ? '100%' : undefined)};
    align-items: ${({ centered, spread }) =>
      !spread && centered ? 'center' : undefined};
    justify-items: ${({ centered, direction }) =>
      direction === Direction.vertical && centered ? 'center' : undefined};
    flex-direction: ${({ direction }) =>
      direction === Direction.horizontal ? 'row' : 'column'};
    height: ${({ direction, spread }) =>
      direction === Direction.vertical && spread ? '100%' : undefined};

    > * {
      display: ${({ spread }) => (spread ? 'flex' : 'inline-flex')};
      align-items: ${({ spread }) => (spread ? 'center' : undefined)};
      margin: ${({ direction, spacing, spread }) =>
        spread
          ? '0'
          : direction === Direction.horizontal
          ? `0 ${computeInnerSpacing(spacing)}`
          : `${computeInnerSpacing(spacing)} 0`};
      flex: ${({ spread }) => (spread ? '1' : '')};
      justify-content: ${({ direction, spread }) =>
        spread && direction === Direction.horizontal ? 'center' : undefined};
    }

    &:before {
      content: ${({ spread }) => (spread ? '""' : undefined)};
      display: inline-flex;
      flex: 0.5;
    }

    &:after {
      content: ${({ spread }) => (spread ? '""' : undefined)};
      display: inline-flex;
      flex: 0.5;
    }

    > *:first-child {
      margin-left: ${({ direction, noGutters, spacing, spread }) =>
        direction === Direction.horizontal && !noGutters && !spread
          ? computeOuterSpacing(spacing)
          : 0};
      margin-top: ${({ direction, noGutters, spacing, spread }) =>
        direction === Direction.vertical && !noGutters && !spread
          ? computeOuterSpacing(spacing)
          : 0};
    }

    > *:last-child {
      margin-right: ${({ direction, noGutters, spacing, spread }) =>
        direction === Direction.horizontal && !noGutters && !spread
          ? computeOuterSpacing(spacing)
          : 0};
      margin-bottom: ${({ direction, noGutters, spacing, spread }) =>
        direction === Direction.vertical && !noGutters && !spread
          ? computeOuterSpacing(spacing)
          : 0};
    }
  `

  return <Root {...rest} />
}
SpacedGroup.defaultProps = {
  as: 'div',
  direction: Direction.horizontal,
}
export default SpacedGroup
export { Direction }
