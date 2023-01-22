import { useState } from "react";
import { Product } from "../products";

const Dropdown = ({ productList }: { productList: Product[] }) => {
  const [product, setProduct] = useState("");

  const handleProductChange = (e: any) => {
    setProduct(e.target.value);
  };

  return (
    <div>
      {product}
      <br />
      <select onChange={handleProductChange}>
        <option value="⬇️ Select a product ⬇️"> -- Select a product -- </option>
        {productList.map((item) => (
          <option key={item.id}>
            {item.productName}, price per item EUR {item.price}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
