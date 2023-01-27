import Dropdown from "./components/Dropdown/dropdown";
import { useState } from "react";
import Actions from "./components/Actions/actions";
import List from "./components/List/list";
import { Wrapper } from "./App.css";

const App = () => {
  const [cartArr, updateCartArr] = useState<any>([]);

  const clearCart = async () => {
    updateCartArr([]);
  };

  const checkout = () => {
    clearCart();
    alert("Yayy! Order placed successfully!!!");
  };

  const addToCart = (product: any) => {
    const updatedCartArr = [...cartArr, product];
    updateCartArr(updatedCartArr);
  };

  const deleteProduct = (index: any) => {
    let updatedCartArr = [...cartArr];
    updatedCartArr.splice(index, 1);
    updateCartArr(updatedCartArr);
  };

  return (
    <Wrapper>
      <Dropdown cartArr={cartArr} addToCart={addToCart} />
      {cartArr.length > 0 && (
        <>
          <List cartArr={cartArr} deleteProduct={deleteProduct}></List>

          <Actions
            cartArr={cartArr}
            clearCart={clearCart}
            checkout={checkout}
          ></Actions>
        </>
      )}
    </Wrapper>
  );
};

export default App;
