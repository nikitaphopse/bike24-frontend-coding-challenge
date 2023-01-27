import {
  BtnClearCart,
  BtnBuyCart,
  MainContainer,
  BtnContainer,
  Total,
} from "./actions.css";
import "../../../src/style.css";

const Actions = ({ cartArr = [], clearCart, checkout }: any) => {
  return (
    <MainContainer>
      <span className="total">Total</span>
      <Total>
        <span className="margin-right-20">
          {cartArr
            .reduce(
              (acc: any, item: any) => (acc += item.price * item.amount),
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
