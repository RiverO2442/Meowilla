import logo from './logo.svg';
import './App.css';
import Header from './pages/header/header';
import Footer from './pages/footer/footer';
import Pages from './pages';

function App() {
  return (
    <div className="App bg-gray-600">
      <Header/>
      <Pages/>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Footer/>
    </div>
  );
}

export default App;
