import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Cardcomponent from "./Components/Cardcomponent";
import CartComponents from "./Components/CartComponents";
import products from "./Components/Products";

function App() {
  const { items } = products;
  const [cartitems, setCartitems] = useState([]);

  const Remove = (item) => {
    const exist = cartitems.find((x) => x.id === item.id);
    if (exist.qty === 1) {
      setCartitems(cartitems.filter((x) => x.id !== item.id));
    } else {
      setCartitems(
        cartitems.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="App">
      <div class="grid grid-col-2 grid-flow-col justify-items-center">
        <div>
          <Cardcomponent
            items={items}
            cartitems={cartitems}
            setCartitems={setCartitems}
          />
        </div>

        <div class="p-5 m-5">
          <CartComponents cartitems={cartitems} remove={Remove} />
        </div>
      </div>
    </div>
  );
}

export default App;
