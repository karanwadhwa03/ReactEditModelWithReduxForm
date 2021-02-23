import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

const renderInput = ({ type, input, disabled }) => {
  // console.log(disabled);
  return (
    <span>
      <input {...input} type="text" disabled={disabled}></input>
    </span>
  );
};

function InlineEditForm(props) {
  const [disable, setdisable] = useState(true);
  const dispatch = useDispatch();
  console.log(props);
  const { index, handleSubmit, form, item, EditModal, deleteHandler } = props;
  const id = form.substr(11);
  //console.log("SKJS",id)
  const Editable = () => {
    setdisable(!disable);
  };
  const submitHandler = (values) => {
    //console.log("{}{}{}",values,id)
    //console.log(values)
    dispatch({ type: "UPDATE", payload: { values: values, id: id } });
    Editable();
  };

  return (
    <form onSubmit={handleSubmit((values) => submitHandler(values))}>
      {index + 1} &nbsp;
      <span onClick={Editable}>Edit</span> &nbsp;
      <Field
        component={renderInput}
        name="name"
        type="text"
        disabled={disable}
      ></Field>{" "}
      &nbsp;
      <Field
        component={renderInput}
        name="email"
        type="text"
        disabled={disable}
      ></Field>{" "}
      &nbsp;
      <Field
        component={renderInput}
        name="rollno"
        type="text"
        disabled={disable}
      ></Field>{" "}
      &nbsp;
      <span>
        <Link to={`/edit/${item.id}`}>Edit</Link>
      </span> &nbsp;
      <span
        onClick={() => deleteHandler(item.id)}
        style={{ cursor: "pointer" }}
      >
        Delete
      </span>  &nbsp;
      <span onClick={() => EditModal(item.id)}>EDIT MODAL</span> &nbsp;
      <button style={{ display: "none" }}></button>
    </form>
  );
}

export default reduxForm()(InlineEditForm);
