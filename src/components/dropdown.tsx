import data from "./../products.json";
import { useState, useEffect } from "react";
import { DropdownBox } from "./dropdown.css";

const Dropdown = ({ cartArr }: any) => {
  const initialProduct = { id: "" };
  const [selProduct, setProduct] = useState<any>(initialProduct);
  const [currCount, setCount] = useState<any>(1);

  useEffect(() => {
    if (!cartArr.length) {
      setProduct(initialProduct);
      setCount(1);
    }
  }, [cartArr]);

  const handleProductChange = (event: any) => {
    const updatedProduct = data.find(
      (product: any) => product.id === event.target.value
    );
    setProduct(updatedProduct);
  };

  return (
    <div>
      <DropdownBox onChange={handleProductChange} value={selProduct.id}>
        <option disabled value="">
          Select a Product
        </option>
        {data.map((product) => (
          <option
            key={product.id}
            value={product.id}
          >{`${product.productName} - $${product.price}`}</option>
        ))}
      </DropdownBox>
    </div>
  );
};

export default Dropdown;
