import { Table, TableHead, TableData, Image } from "./list.css";

const List = ({ cartArr = [], deleteProduct }: any) => {
  return (
    <Table>
      <thead>
        <tr>
          <TableHead name="true">Product Name</TableHead>
          <TableHead>Unit Price</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Delete</TableHead>
        </tr>
      </thead>
      <tbody>
        {cartArr.map(({ id, productName, price, amount }: any, index: any) => (
          <tr key={id}>
            <TableData name="true">{productName}</TableData>
            <TableData>{price}</TableData>
            <TableData>{amount}</TableData>
            <TableData>{(price * amount).toFixed(2)}</TableData>
            <TableData>
              <Image
                onClick={() => deleteProduct(index)}
                alt="trash-icon"
                src="/icons8-trash-can-50.png"
              />
            </TableData>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default List;
