import NavBar from "./components/Navbar";
import ProductList from "./components/ProductList";
import { Provider } from "react-redux";
import store from "./store";
import Cart from './components/Cart';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CategoryCarousal from "./components/CategoryCarousal";
import CategoryList from "./components/CategoryList";
import SearchList from "./components/SearchList";
import Footer from "./components/Footer";

function App() {

  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <CategoryCarousal />
        <Routes>
          <Route path = "/" element = {<ProductList />} />
          <Route path = "/cart" element = {<Cart />} />
          <Route path = "/category/:category" element = {<CategoryList />} />
          <Route path = "/search" element = {<SearchList />} />
        </Routes>
        <Footer />
      </Router> 
    </Provider>
  )
}

export default App
