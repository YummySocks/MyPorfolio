import React, {useState} from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Page from './components/Page';
import Footer from './components/Footer';

function App() {
  const [pages] = useState([
    {
      name: "about me"
    },
    { name: "portfolio" },
    {name: "resume"},
    { name: "contact" }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header>
        <NavBar
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></NavBar>
      </Header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
    </div>
  );
}

export default App;
