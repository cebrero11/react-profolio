import {useState} from 'react';  

import Footer from './components/Footer';
import Header from './components/Header'; 
import Nav from './components/Nav'; 
import Page from './components/Page'; 


function App() {
  const [pages] = useState([
    {
      name: 'about me'
    },
    {
      name: 'portfolio'
    },
    {
      name: 'contact'
    },
    {
      name: 'resume'
    }
  ]); 

  const [currentPage, setCurrentPage] = useState(pages[0]); 
  return (
    <div className="App">
      <Header>
        <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage ={currentPage}
          /> 
      </Header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
    </div>
  );
}

export default App;
