import data from "./products.json";
import Dropdown from "./components/dropdown";

export type Product = {
  id: string;
  productName: string;
  maxAmount: number;
  taxRate: number;
  price: number;
};

export type ProductList = {
  products: Product[];
};

const Products = () => {
  const productList = {
    products: data,
  };

  return (
    <div>
      <Dropdown productList={productList.products} />
    </div>
  );
};

export default Products;
