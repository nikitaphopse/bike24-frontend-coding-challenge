import data from "./../products.json";

const Dropdown = () => {
  return (
    <div>
      <select>
        <option value="⬇️ Select a product ⬇️"> -- Select a product -- </option>
        {data.map((product) => (
          <option
            key={product.id}
            value={product.id}
          >{`${product.productName} - $${product.price}`}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
