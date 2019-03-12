import { merge } from 'lodash'
import { palette } from './palette'

const internalTheme = {
  Tag: {
    backgroundColor: '#fbeecc',
    color: '#ca7700',
  },
  Lozenge: {
    warning: {
      main: palette.sunglow,
    },
    error: {
      main: palette.sunset,
    },
    info: {
      main: palette.dove,
    },
    success: {
      main: palette.shamrock,
    },
  },
  Link: {},
  Breadcrumb: {
    main: palette.dove,
    selected: palette.gunmetal,
    mainHighlight: '#009ff2',
  },
  Paper: {
    color: palette.paper,
  },
  Code: {
    highlighted: {
      display: 'block',
      background: 'rgba(255, 255, 255, 0.18)',
    },
    'code[class*="language-"]': {
      MozTabSize: '2',
      OTabSize: '2',
      tabSize: '2',
      WebkitHyphens: 'none',
      MozHyphens: 'none',
      msHyphens: 'none',
      hyphens: 'none',
      whiteSpace: 'pre-wrap',
      wordWrap: 'normal',
      fontFamily: 'Menlo, Monaco, "Courier New", monospace',
      fontSize: '14px',
      color: '#76d9e6',
      textShadow: 'none',
    },
    'pre[class*="language-"]': {
      MozTabSize: '2',
      OTabSize: '2',
      tabSize: '2',
      WebkitHyphens: 'none',
      MozHyphens: 'none',
      msHyphens: 'none',
      hyphens: 'none',
      whiteSpace: 'pre-wrap',
      wordWrap: 'normal',
      fontFamily: 'Menlo, Monaco, "Courier New", monospace',
      fontSize: '14px',
      color: '#76d9e6',
      textShadow: 'none',
      background: '#2a2a2a',
      padding: '15px',
      borderRadius: '4px',
      border: '1px solid #e1e1e8',
      overflow: 'auto',
      position: 'relative',
    },
    ':not(pre)>code[class*="language-"]': {
      background: '#2a2a2a',
      padding: '0.15em 0.2em 0.05em',
      borderRadius: '.3em',
      border: '0.13em solid #7a6652',
      boxShadow: '1px 1px 0.3em -0.1em #000 inset',
    },
    'pre[class*="language-"] code': {
      whiteSpace: 'pre',
      display: 'block',
    },
    namespace: {
      Opacity: '.7',
    },
    comment: {
      color: '#6f705e',
    },
    prolog: {
      color: '#6f705e',
    },
    doctype: {
      color: '#6f705e',
    },
    cdata: {
      color: '#6f705e',
    },
    operator: {
      color: '#a77afe',
    },
    boolean: {
      color: '#a77afe',
    },
    number: {
      color: '#a77afe',
    },
    'attr-name': {
      color: '#e6d06c',
    },
    string: {
      color: '#e6d06c',
    },
    entity: {
      color: '#e6d06c',
      cursor: 'help',
    },
    url: {
      color: '#e6d06c',
    },
    '.language-css .token.string': {
      color: '#e6d06c',
    },
    '.style .token.string': {
      color: '#e6d06c',
    },
    selector: {
      color: '#a6e22d',
    },
    inserted: {
      color: '#a6e22d',
    },
    atrule: {
      color: '#ef3b7d',
    },
    'attr-value': {
      color: '#ef3b7d',
    },
    keyword: {
      color: '#ef3b7d',
    },
    important: {
      color: '#ef3b7d',
      fontWeight: 'bold',
    },
    deleted: {
      color: '#ef3b7d',
    },
    regex: {
      color: '#76d9e6',
    },
    statement: {
      color: '#76d9e6',
      fontWeight: 'bold',
    },
    placeholder: {
      color: '#fff',
    },
    variable: {
      color: '#fff',
    },
    bold: {
      fontWeight: 'bold',
    },
    punctuation: {
      color: '#bebec5',
    },
    italic: {
      fontStyle: 'italic',
    },
    'code.language-markup': {
      color: '#f9f9f9',
    },
    'code.language-markup .token.tag': {
      color: '#ef3b7d',
    },
    'code.language-markup .token.attr-name': {
      color: '#a6e22d',
    },
    'code.language-markup .token.attr-value': {
      color: '#e6d06c',
    },
    'code.language-markup .token.style': {
      color: '#76d9e6',
    },
    'code.language-markup .token.script': {
      color: '#76d9e6',
    },
    'code.language-markup .token.script .token.keyword': {
      color: '#76d9e6',
    },
    'pre[class*="language-"][data-line]': {
      position: 'relative',
      padding: '1em 0 1em 3em',
    },
    'pre[data-line] .line-highlight': {
      position: 'absolute',
      left: '0',
      right: '0',
      padding: '0',
      marginTop: '1em',
      background: 'rgba(255, 255, 255, 0.08)',
      pointerEvents: 'none',
      lineHeight: 'inherit',
      whiteSpace: 'pre',
    },
    'pre[data-line] .line-highlight:before': {
      content: 'attr(data-start)',
      position: 'absolute',
      top: '.4em',
      left: '.6em',
      minWidth: '1em',
      padding: '0.2em 0.5em',
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      color: 'black',
      font: 'bold 65%/1 sans-serif',
      height: '1em',
      lineHeight: '1em',
      textAlign: 'center',
      borderRadius: '999px',
      textShadow: 'none',
      boxShadow: '0 1px 1px rgba(255, 255, 255, 0.7)',
    },
    'pre[data-line] .line-highlight[data-end]:after': {
      content: 'attr(data-end)',
      position: 'absolute',
      top: 'auto',
      left: '.6em',
      minWidth: '1em',
      padding: '0.2em 0.5em',
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      color: 'black',
      font: 'bold 65%/1 sans-serif',
      height: '1em',
      lineHeight: '1em',
      textAlign: 'center',
      borderRadius: '999px',
      textShadow: 'none',
      boxShadow: '0 1px 1px rgba(255, 255, 255, 0.7)',
      bottom: '.4em',
    },
  },
  Typography: {
    h1: {
      '--margin-top-multiplier': 0,
      fontSize: 42,
      fontWeight: 400,
      lineHeight: 1.25,
      marginTop: 0,
    },
    h2: {
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
      marginTop: 56,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
    },
    blockquote: {
      borderLeft: '5px solid #999',
      paddingLeft: '24px',
    },
  },
}

export default (parentTheme = internalTheme) => {
  return merge({}, internalTheme, parentTheme)
}
