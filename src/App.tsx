import Dropdown from "./components/Dropdown/dropdown";
import { useState } from "react";
import Actions from "./components/Actions/actions";
import { ToastContainer, toast } from "react-toastify";
import List from "./components/List/list";
import { Wrapper } from "./App.css";

const App = () => {
  const [cartArr, updateCartArr] = useState<any>([]);

  const clearCart = async () => {
    updateCartArr([]);
  };

  const checkout = () => {
    console.log("trigger");

    toast.success("Yay! Order placed successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      type: toast.TYPE.SUCCESS,
    });
    clearCart();
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
      <ToastContainer />
    </Wrapper>
  );
};

export default App;
