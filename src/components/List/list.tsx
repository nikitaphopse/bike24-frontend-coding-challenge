import { Table, TableHead, TableData, Image } from "./list.css";
import { dataObj } from "./../Dropdown/dropdown";

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
        {cartArr.map(
          ({ id, productName, price, maxAmount }: dataObj, index: number) => (
            <tr key={id}>
              <TableData name="true">{productName}</TableData>
              <TableData>{price}</TableData>
              <TableData>{maxAmount}</TableData>
              <TableData>{(price * maxAmount).toFixed(2)}</TableData>
              <TableData>
                <Image
                  onClick={() => deleteProduct(index)}
                  alt="trash-icon"
                  src="/icons8-trash-can-50.png"
                />
              </TableData>
            </tr>
          )
        )}
      </tbody>
    </Table>
  );
};

export default List;
