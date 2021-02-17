import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FormComponent from "./FormComponent";

function EditPage(props) {
  const dispatch = useDispatch();
  console.log(props.match.params.id);
  const id = props.match.params.id;

  const items = useSelector((state) => state.ProductReducer.items);
  // console.log(items)
  // console.log(id)
  let data = items.filter((item) => item.id == id);
  data = data[0];
  //console.log(data)
  console.log(props);

  const submitHandler = (values) => {
    //console.log(values)
    dispatch({ type: "UPDATE", payload: { values: values, id: id } });
    /////////
    alert("You Submitted SuccesFully");
    props.history.push("/products");
  };

  return (
    <div>
      <FormComponent
        id={id}
        initialValues={data}
        onSubmit={submitHandler}
      ></FormComponent>
      {/* <EditPageForm  ></EditPageForm> */}
    </div>
  );
}

export default EditPage;
