import styled from 'styled-components'
import GlobalStyles from './GlobalStyles'
import Seo from './Seo'
import WindowResizeListener from './WindowResizeListener'

const Main = styled.main`
  width: '100%';
`

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Seo />
    <Main>{children}</Main>
  </>
)
export default Layout
