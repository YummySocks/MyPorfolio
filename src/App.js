import React, {useState} from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Page from './components/Page';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header>
        <NavBar></NavBar>
      </Header>
      <main>
        <Page></Page>
      </main>
      <Footer />
    </div>
  );
}

export default App;
