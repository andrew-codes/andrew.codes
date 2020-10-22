import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    body {
        --x-height-multiplier: 0.375;
        --baseline-multiplier: 0.17;
        --webkit-font-smoothing: antialiased;
        color: rgba(255,255,255);
        background-color: rgb(34, 35, 39);
        font-family: "Open Sans", sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        letter-spacing: -.003em;
        margin: 0;
        outline: 0;
        text-rendering: optimizeLegibility;
        word-break: break-word;
    }

    * {
        box-sizing: border-box;
    }
`

export default GlobalStyles
