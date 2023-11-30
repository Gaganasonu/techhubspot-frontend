import "./App.css";
import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { About } from "./pages/shop/About";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import Login from "./components/Login";
import { SignUp } from "./components/SignUp";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/About" element={<About/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
