import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import SearchMap from './components/Map';



function App() {
  return (
    <>
      <Header />
      <Main />
      <SearchMap />
    </>
  );
}

export default App;
