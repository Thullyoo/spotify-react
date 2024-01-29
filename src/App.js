import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer';

function App() {
  return (
<>
  <nav>
    <Sidebar/>
  </nav>
  <nav>
    <Header/>
  </nav>
  <main>
    <Main/>
  </main>
  <footer>
    <Footer/>
  </footer>
</>
  );
}

export default App;
