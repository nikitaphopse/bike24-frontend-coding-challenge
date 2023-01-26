import Dropdown from "./components/dropdown";
import { useState } from "react";

const App = () => {
  const [cartArr, updateCartArr] = useState<any>([]);

  return (
    <div className="App">
      <Dropdown cartArr={cartArr} />
    </div>
  );
};

export default App;
