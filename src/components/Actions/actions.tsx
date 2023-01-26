import { Button } from "react-bootstrap";
import "../../src/style.css";

const Actions = ({ cartArr = [], clearCart, checkout }: any) => {
  return (
    <div>
      <span className="total">Total</span>
      <div>
        <span className="margin-right-20">
          {cartArr
            .reduce(
              (acc: any, item: any) => (acc += item.price * item.amount),
              0
            )
            .toFixed(2)}
        </span>
      </div>
      <div>
        <Button onClick={clearCart}>Clear Cart</Button>
        <Button onClick={checkout}>Buy!</Button>
      </div>
    </div>
  );
};

export default Actions;
