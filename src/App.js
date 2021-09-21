import logo from './logo.svg';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Countries from './LoadData/Countries';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}

export default App;
