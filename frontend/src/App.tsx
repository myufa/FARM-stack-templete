import React, { FC } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import styled from 'styled-components';
import { Nav } from './components/Nav/Nav';
import { CounterPage } from './pages/CounterPage';
import { Main } from './pages/Main';
import { usePageStore } from './store';
import GlobalStyle from './styles/global';

const AppContainer = styled.div`
    position: relative;
    top: 70px;
    left: 0;
    right: 0;
    height: 100vh;
`
const App: FC = () => {
  const { page, setPage } = usePageStore()
  return (
    <>
      <GlobalStyle />
      <Router>
        <Nav page={page}/>
        <AppContainer>
          <Route 
            exact={true} path="/" 
            render={() => {return (<Main />)}} 
          />
          <Route 
            exact={true} path="/counter/" 
            render={() => {return (<CounterPage/>)}} 
          />
        </AppContainer>
      </Router>
    </>
  );
}

export default App;
