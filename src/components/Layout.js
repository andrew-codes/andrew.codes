import styled from 'styled-components'
import GlobalNavigation from './GlobalNavigation'
import GlobalStyles from './GlobalStyles'
import WithBreakpoint from './WithBreakpoint'

const RootItem = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-items: center;
  width: ${({ breakpoint }) =>
    WithBreakpoint.isBreakpointUp('md', breakpoint)
      ? 'calc(100% - 85px)'
      : '100%'};
  max-width: 1200px;

  > * {
    justify-content: center;
  }
`

const Header = styled(RootItem)`
  justify-items: unset;
  width: ${({ breakpoint }) =>
    WithBreakpoint.isBreakpointUp('md', breakpoint)
      ? 'calc(100% - 85px)'
      : '100%'};
  > * {
    margin: ${({ breakpoint }) =>
      WithBreakpoint.isBreakpointUp('md', breakpoint) ? '24px 96px' : '16px'};
    justify-content: flex-end;
  }
`
const Main = styled(RootItem)``

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <WithBreakpoint>
      {(breakpoint) => (
        <>
          <Header breakpoint={breakpoint}>
            <GlobalNavigation />
          </Header>
          <Main breakpoint={breakpoint}>{children}</Main>
        </>
      )}
    </WithBreakpoint>
  </>
)
export default Layout
