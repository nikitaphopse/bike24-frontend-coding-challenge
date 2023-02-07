import data from "../../products.json";
import { useState, useEffect } from "react";
import {
  MainContainer,
  DropdownBox,
  SliderContainer,
  AmountContainer,
  Count,
  ErrorMsg,
  BtnAddCart,
} from "./dropdown.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "../../../src/style.css";

export interface dataObj {
  id: string;
  productName: string;
  maxAmount: number;
  taxRate: number;
  price: number;
}

const Dropdown = ({
  addToCart,
  cartArr,
}: {
  addToCart: any;
  cartArr: dataObj[];
}) => {
  const typedData: dataObj[] = data;
  console.log(typedData);
  const initialProduct: dataObj = {
    id: "",
    productName: "",
    maxAmount: 100,
    taxRate: 0,
    price: 0,
  };
  const [selProduct, setProduct] = useState<dataObj>(initialProduct);
  const [currCount, setCount] = useState<number>(1);
  const [maxCount, setMaxCount] = useState<number>();
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
    const updatedProduct = typedData.find(
      (product: dataObj) => product.id === event.target.value
    );
    if (updatedProduct) setProduct(updatedProduct);
  };

  const updateCount = (count: any) => {
    setCount(count);
  };

  const isProductSelected = () => {
    return cartArr.findIndex(({ id }: dataObj) => id === selProduct?.id) !== -1;
  };

  const addProductToCart = () => {
    if (!btnDisabled) {
      addToCart({ ...selProduct, amount: currCount });
      setProduct(initialProduct);
      setCount(1);
    }
  };

  return (
    <MainContainer>
      <DropdownBox onChange={handleProductChange} value={selProduct.id}>
        <option disabled value="">
          Select a Product
        </option>
        {typedData.map((product) => (
          <option key={product.id} value={product.id}>{`${
            product.productName
          } - $${product.price.toFixed(2)}`}</option>
        ))}
      </DropdownBox>
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

      <BtnAddCart disabled={btnDisabled} onClick={addProductToCart}>
        Add to Cart
      </BtnAddCart>
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
