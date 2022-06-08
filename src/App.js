import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout"
import Home from "./components/Home";
import Collections from "./components/Collections"
import About from "./components/About";
import Contact from "./components/Contact";
import "./style.css"
import Cart from "./components/Cart";
function App() {      
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}/>
          <Route path="collections" element={<Collections />}/>
          <Route path="about" element={<About />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="cart" element={<Cart />}/>
          </Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
