import PropTypes from 'prop-types'
import React, { Children, Component, isValidElement, cloneElement } from 'react'
import { RendererProvider } from 'react-fela'
import getRenderer from './getRenderer'
import mergeThemes from './mergeThemes'
import { ThemeProvider, WithTheme } from './ThemeProvider'
import defaultTheme from '../defaultTheme'

class StyleProvider extends Component {
  render() {
    const { dev, children, renderer, ...rest } = this.props
    const providerRenderer = getRenderer({ dev, renderer })
    const child = Children.only(children)
    return (
      <RendererProvider renderer={providerRenderer}>
        <WithTheme>
          {(ctxTheme = () => {}) => (
            <ThemeProvider theme={mergeThemes(defaultTheme, ctxTheme)}>
              {isValidElement(child) ? cloneElement(child, { ...rest }) : child}
            </ThemeProvider>
          )}
        </WithTheme>
      </RendererProvider>
    )
  }
}
StyleProvider.propTypes = {
  /**
   * A single, valid, renderable node.
   */
  children: PropTypes.node,
  /**
   * Enables development friendly CSS classNames when true.
   */
  dev: PropTypes.bool,
  /**
   * Typically only used for testing purposes; provide your own, external renderer.
   */
  // eslint-disable-next-line react/forbid-prop-types
  renderer: PropTypes.object,
}
StyleProvider.defaultProps = {
  dev: false,
}

export default StyleProvider
