import Infos from '../Infos';
import Header from '../Header';
import NavBar from '../NavBar';
import styled from 'styled-components';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';

const AppContainer = styled.div`
  //max-width: 1440px;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100vw;
`

function App() {
  return (
    <AppContainer>
      <Header />
      <NavBar />
      <Outlet />
      <Infos />
      <Footer />
    </AppContainer>
  );
}

export default App;
