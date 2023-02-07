import {
  BtnClearCart,
  BtnBuyCart,
  MainContainer,
  BtnContainer,
  Total,
} from "./actions.css";
import "../../../src/style.css";
import { dataObj } from "./../Dropdown/dropdown";

const Actions = ({ cartArr = [], clearCart, checkout }: any) => {
  return (
    <MainContainer>
      <span className="total">Total</span>
      <Total>
        <span className="margin-right-20">
          {cartArr
            .reduce(
              (acc: number, item: dataObj) =>
                (acc += item.price * item.maxAmount),
              0
            )
            .toFixed(2)}
        </span>
      </Total>
      <BtnContainer>
        <BtnClearCart onClick={clearCart}>Clear Cart</BtnClearCart>
        <BtnBuyCart onClick={checkout}>Buy!</BtnBuyCart>
      </BtnContainer>
    </MainContainer>
  );
};

export default Actions;
