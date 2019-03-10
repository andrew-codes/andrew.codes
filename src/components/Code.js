import PropTypes from 'prop-types'
import React from 'react'
import { isEmpty } from 'lodash'
import virtualizedRenderer from 'react-syntax-highlighter-virtualized-renderer'
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { StyleProvider, WithTheme } from './StyleProvider'
import { Box } from './Box'
import { highlight } from 'lowlight'

const Code = ({ children, height, language, highlightLines, ...other }) => {
  let lines = []
  if (Array.isArray(highlightLines)) {
    lines = highlightLines
  } else {
    lines = lines.concat(
      highlightLines
        .split(',')
        .reduce((acc, current) => {
          const range = current.split('-')
          if (range.length > 1) {
            for (let start = range[0]; start <= range[1]; start++) {
              acc.push(start)
            }
            return acc
          }
          return acc.concat(current)
        }, [])
        .map(lineNumberString => parseInt(lineNumberString)),
    )
  }
  return (
    <StyleProvider>
      <Box>
        <WithTheme>
          {theme => (
            <SyntaxHighlighter
              {...other}
              wrapLines={true}
              language={language || ''}
              showLineNumbers={!isEmpty(lines)}
              // lineNumberStyle={lineNum =>
              //   lines.includes(lineNum)
              //     ? { color: 'pink', background: 'purple' }
              //     : {}
              // }
              lineProps={lineNum =>
                lines.includes(lineNum)
                  ? { style: { ...theme.Code.highlighted } }
                  : {}
              }
              style={theme.Code}
              customStyle={height ? { height } : null}
              renderer={height ? virtualizedRenderer() : null}
            >
              {children}
            </SyntaxHighlighter>
          )}
        </WithTheme>
      </Box>
    </StyleProvider>
  )
}
Code.propTypes = {
  children: PropTypes.string.isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  language: PropTypes.string,
}
Code.defaultProps = {
  height: null,
  language: null,
}

export default Code
