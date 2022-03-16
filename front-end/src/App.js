// DEPENDENCIES
import { Routes, Route } from "react-router-dom";
import { Grommet } from "grommet";
import { Theme } from "./styles/HeaderTheme";

// PAGES
// import Home from "./pages/Home";
import Index from "./pages/Index";
import Show from "./pages/Show";
import Edit from "./pages/Edit";
import New from "./pages/New";
import FourOFour from "./pages/FourOFour";
import Cart from "./pages/Cart";

// COMPONENTS
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const handleAddToCart = (product, amount) => {
    let objProduct = {...product}
    objProduct.amount = amount
    setCart([...cart, objProduct])
    handleSubtotal([...cart, objProduct ])
  }

  const handleSubtotal = (cart) => {
    let subtotal = cart.map(item => Number(item.price) * item.amount).reduce((a,b) => a+ b, 0)
    setTotal(subtotal);
  }

  return (
    <Grommet theme={Theme} className="App">
      <Navbar cart={cart} />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/products" element={<Index addToCart={handleAddToCart} />}/>
        <Route path="/products/:id" element={<Show addToCart={handleAddToCart} />} />
        <Route path="/products/new" element={<New />} />
        <Route path="/products/:id/edit" element={<Edit />} />
        <Route path="/cart" element={<Cart setCart={setCart} cart={cart} setTotal={setTotal} subtotal={total} />} />
        <Route path="*" element={<FourOFour />} />
      </Routes>
      <Footer />
    </Grommet>
  );
}

export default App;
