import { useState } from "react";
import ItemAdd from "./components/ItemAdd";

const App = () => {
  return (
    <div className="bg-cyan-100 min-h-screen flex justify-center items-center">
      <ItemAdd />
    </div>
  );
};

export default App;
