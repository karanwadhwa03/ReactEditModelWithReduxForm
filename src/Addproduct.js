import React, { useState } from "react";
import FormComponent from "./FormComponent";
import { useDispatch } from "react-redux";
//import Swal from "sweetalert2";




function Addproduct(props) {
  

  console.log(props);
  const Dispatch = useDispatch();
  const submitHandler = (values) => {
    const payload = { ...values, id: Math.floor(Math.random() * 1000000) };
    console.log(payload);
    Dispatch({ type: "ADD", payload: payload }); // YE SHAYD SYNCHRONUS H
    
    //KYA YE GALAT H
    alert("You Submitted Succesfully")
    props.history.push('/products');
    

  };

  return (
    <div>
      <FormComponent onSubmit={submitHandler}></FormComponent>
    </div>
  );
}

export default Addproduct;
