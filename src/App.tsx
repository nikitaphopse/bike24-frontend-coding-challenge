import Dropdown from "./components/Dropdown/dropdown";
import { useState } from "react";
import Actions from "./components/Actions/actions";
import { ToastContainer, toast } from "react-toastify";

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

  return (
    <div className="App">
      <Dropdown cartArr={cartArr} />
      {cartArr.length > 0 && (
        <>
          <Actions
            cartArr={cartArr}
            clearCart={clearCart}
            checkout={checkout}
          ></Actions>
        </>
      )}
      <ToastContainer />
    </div>
  );
};

export default App;
