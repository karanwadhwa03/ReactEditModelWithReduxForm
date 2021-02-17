import React from "react";
import FormComponent from "./FormComponent";
import { useDispatch } from "react-redux";

function Addproduct(props) {
  console.log(props);
  const Dispatch = useDispatch();
  const submitHandler = (values) => {
    const payload = { ...values, id: Math.floor(Math.random() * 1000000) };
    console.log(payload);
    return Dispatch({ type: "ADD", payload: payload });
  };

  return (
    <div>
      <FormComponent onSubmit={submitHandler}></FormComponent>
    </div>
  );
}

export default Addproduct;
