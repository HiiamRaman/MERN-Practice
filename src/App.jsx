import { useState } from "react";
import Render from "./components/AdminOrderTracker";
import Card from "./components/Usercard";
import "./App.css";
import ShoeCard from "./components/AdminOrderTracker";
import MiniEcommerce from "./components/MiniEcommerce";
import Practice from "./components/statemnt";

function App() {
 
   const[cartItems,setCartItems] = useState([]) ;
   const[selectedProduct,setSelectedProduct]=  useState(null)
  return (
    <div>
    

     < Practice />
    </div>
  );
}

export default App;
