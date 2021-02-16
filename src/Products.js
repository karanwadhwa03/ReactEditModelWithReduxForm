import React from "react";
import Allproducts from "./Allproducts";

function Products() {
  return (
    <div className="p-5">
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Roll No.</th>
            <th scope="col"> Edit</th>
            <th scope="col"> Delete</th>
          </tr>
        </thead>
        <tbody>
            <Allproducts></Allproducts>
        </tbody>
      </table>
    </div>
  );
}

export default Products;
