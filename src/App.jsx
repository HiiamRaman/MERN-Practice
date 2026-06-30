import { useState } from "react";
import Render from "./components/AdminOrderTracker";
import Card from "./components/Usercard";
import "./App.css";
import ShoeCard from "./components/AdminOrderTracker";
import MiniEcommerce from "./components/MiniEcommerce";
import Practice from "./components/statemnt";
import Counter from "./practice/statemanagement/counter";
import Homepages from "./pages/Home.pages";
import Form from "./practice/statemanagement/Form";
function App() {
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  return (
    <div>
     <Homepages/>
    </div>
  );
}

export default App;
