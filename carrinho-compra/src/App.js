import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './pages/Products/Products';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import { AppContext } from './store/AppContext';
import About from './pages/About/About';
import Team from './pages/Team/Team';

const initialState = {
  cart: [],
  subtotal: 0,
  products: [] 
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <AppContext initialState={initialState}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/about' element={<About />} />
            <Route path='/team' element={<Team />} />
          </Routes>
        </AppContext>
      </div>
    </BrowserRouter>
  );
}

export default App;
