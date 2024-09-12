import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/navbar';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import {ShoppingCartProvider} from './context/ShoppingCartContext';

function App() {
  return (
    <div className="App">
      <ShoppingCartProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Shop />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </Router>
        </ShoppingCartProvider>
    </div>
  );
}

export default App;
