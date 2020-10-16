import styled from 'styled-components'
import GlobalNavigation from './GlobalNavigation'
import GlobalStyles from './GlobalStyles'
import Seo from './Seo'

const RootItem = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-items: center;
  width: calc(100% - 85px - 85px);
  max-width: 1200px;

  > * {
    justify-content: center;
  }
`

const Header = styled(RootItem)`
  justify-items: unset;
  width: calc(100% - 85px);
  > * {
    margin: 24px 96px;
    justify-content: flex-end;
  }
`
const Main = styled(RootItem)``

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Seo />
    <Header>
      <GlobalNavigation />
    </Header>
    <Main>{children}</Main>
  </>
)
export default Layout
