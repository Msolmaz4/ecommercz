import React from "react";
import Product from "../componnet/Product";
import data from "../data";

const Homescren = () => {
  return (
    <div>
      <div className="row justify-content-center">
        {data.map((data) => (
            <Product data={data}/>
          
        ))}
      </div>
    </div>
  );
};

export default Homescren;
