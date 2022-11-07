
import './App.css';
import Navbar from './components/Nav/Navbar';
import About from './components/Pages/About';

function App() {
  
    switch (window.location.pathname) {
      case "/":
        break
      case "/about":
        break
      case "/contact":
        break
      case "/work":
        break
      case "/resume":
    }
    return (
    <div className="App">
      <Navbar />
      <About />
    </div>
  );
}

export default App;
