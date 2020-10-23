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

    table {
        border-collapse: collapse;
        margin-left: -60px;
        margin-right: 20px;
        width: calc(100% + 170px);

        th, td {
            padding: 8px 16px;
            word-break: normal;
        }

        td {
            color: white;
        }

        thead {
            border-bottom: 4px solid white;
        }

        tr:nth-child(even) {
            background: rgb(40,41,46);
            td {
                color: lightgray !important;
            }
        }
    }


    .column-heading {
        td:first-of-type {
            border-right: 2px solid white;
            width: 200px;
        } 
    }
`

export default GlobalStyles
