import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import mergeThemes from './mergeThemes'
import { ThemeProvider as FelaThemeProvider, ThemeContext } from 'react-fela'

const ThemeProvider = ({ children, theme }) => {
  const contextTheme = useContext(ThemeContext)
  const mergedTheme = mergeThemes(contextTheme, theme)
  return <FelaThemeProvider theme={mergedTheme}>{children}</FelaThemeProvider>
}
ThemeProvider.propTypes = {
  children: PropTypes.node,
  /**
   * Theme to be provided to all components in the sub-tree. If a function, accepts existing theme as only parameter.
   */
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
}

export const WithTheme = ({ children }) => {
  const contextTheme = useContext(ThemeContext)
  return children(contextTheme)
}
export { ThemeProvider }
