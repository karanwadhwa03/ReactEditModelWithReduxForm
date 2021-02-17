import React from "react";
import Allproducts from "./Allproducts";
import Confirm from "./Confirm";
import {useSelector } from 'react-redux'
import ModalComponent from './ModalComponent'

function Products() {
  const show=useSelector(state=>state.ModalReducer.show);
  console.log(show)

  return (
    <div>

    {show && <ModalComponent ></ModalComponent> }
    <div className="p-5 ">
      
      <table className="table fixed ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Roll No.</th>
            <th scope="col"> Edit</th>
            <th scope="col"> Delete</th>
            <th scope="col"> EDITMODAL</th>
          </tr>
        </thead>
        
            <Allproducts></Allproducts>
        
      </table>
    </div>
    </div>
  );
}

export default Products;
