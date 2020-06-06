import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { SearchInput } from './components/SearchInput';



function App() {
  return (
    <>
      <Header />
      <Main />
      <SearchInput />
    </>
  );
}

export default App;
