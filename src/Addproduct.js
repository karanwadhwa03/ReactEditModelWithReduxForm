import React, { useState } from "react";
import FormComponent from "./FormComponent";
import { useDispatch } from "react-redux";
//import Swal from "sweetalert2";




function Addproduct(props) {
  const [show, setshow] = useState(false);

  console.log(props);
  const Dispatch = useDispatch();
  const submitHandler = (values) => {
    const payload = { ...values, id: Math.floor(Math.random() * 1000000) };
    console.log(payload);
    Dispatch({ type: "ADD", payload: payload }); // YE SHAYD SYNCHRONUS H
    setshow(true);
    //KYA YE GALAT H
    setTimeout(() => {
      console.log(show);
      props.history.push('/products');
    }, 1000)

  };

  return (
    <div>
       
      {show && <h1>SUCCESS</h1>}
      <FormComponent onSubmit={submitHandler}></FormComponent>
    </div>
  );
}

export default Addproduct;
