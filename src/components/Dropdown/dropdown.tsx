import data from "../../products.json";
import { useState, useEffect } from "react";
import {
  MainContainer,
  DropdownBox,
  SliderContainer,
  AmountContainer,
  Count,
  ErrorMsg,
} from "./dropdown.css";
import Slider from "rc-slider";
import { Button } from "react-bootstrap";
import "../../src/style.css";

const Dropdown = ({ cartArr }: any) => {
  const initialProduct = { id: "" };
  const [selProduct, setProduct] = useState<any>(initialProduct);
  const [currCount, setCount] = useState<any>(1);
  const [maxCount, setMaxCount] = useState<any>();
  const [btnDisabled, updateButton] = useState<any>();

  useEffect(() => {
    if (!cartArr.length) {
      setProduct(initialProduct);
      setCount(1);
    }
  }, [cartArr]);

  useEffect(() => {
    setMaxCount(Math.max(...data.map((o) => o.maxAmount)));
  }, []);

  useEffect(() => {
    const btnState = !!(
      document.getElementsByClassName("error").length > 0 || !selProduct.id
    );
    updateButton(btnState);
  }, [selProduct.id, currCount, cartArr]);

  const handleProductChange = (event: any) => {
    const updatedProduct = data.find(
      (product: any) => product.id === event.target.value
    );
    setProduct(updatedProduct);
  };

  const updateCount = (count: any) => {
    setCount(count);
  };

  const isProductSelected = () => {
    return cartArr.findIndex(({ id }: any) => id === selProduct?.id) !== -1;
  };

  return (
    <MainContainer>
      <DropdownBox onChange={handleProductChange} value={selProduct.id}>
        <option disabled value="">
          Select a Product
        </option>
        {data.map((product) => (
          <option key={product.id} value={product.id}>{`${
            product.productName
          } - $${product.price.toFixed(2)}`}</option>
        ))}
      </DropdownBox>
      <br />
      {selProduct.id && (
        <>
          <SliderContainer>
            <Slider
              onChange={updateCount}
              min={1}
              max={maxCount}
              defaultValue={currCount}
              step={1}
            />
          </SliderContainer>
          <AmountContainer>
            <Count>{currCount}</Count>
            <span className="margin-right-10">X</span>{" "}
            <span className="margin-right-10">{selProduct.price}</span>
            <span className="margin-right-10">=</span>{" "}
            <span className="margin-right-10">
              {(currCount * selProduct.price).toFixed(2)}
            </span>
          </AmountContainer>
        </>
      )}

      <Button disabled={btnDisabled}>Add to Cart</Button>
      {currCount > selProduct.maxAmount &&
        cartArr.length !== 10 &&
        !isProductSelected() && (
          <ErrorMsg className="error">
            *Quantity limit for product exceeded
          </ErrorMsg>
        )}
      {cartArr.length === 10 && (
        <ErrorMsg className="error">*Maximum product limit reached</ErrorMsg>
      )}
      {isProductSelected() && cartArr.length !== 10 && (
        <ErrorMsg className="error">
          *Product is already present in the cart
        </ErrorMsg>
      )}
    </MainContainer>
  );
};

export default Dropdown;
