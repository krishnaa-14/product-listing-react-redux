import NavBar from "./components/Navbar";
import ProductList from "./components/ProductList";
import { Provider } from "react-redux";
import store from "./store";
import Cart from './components/Cart';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Routes>
          <Route path = "/" element = {<ProductList />} />
          <Route path = "/cart" element = {<Cart />} />
        </Routes>
      </Router> 
    </Provider>
  )
}

export default App
