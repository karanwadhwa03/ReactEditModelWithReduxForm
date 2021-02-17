import React from "react";
import { Form, Button } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";

const renderInput = ({ input, label, type }) => {
  
  return (
    <Form.Group controlId="formBasicEmail">
      <Form.Label> {label} </Form.Label>
      <input
        type={type}
        {...input}
        placeholder={label}
        className="form-control"
      ></input>
      <br></br>
    </Form.Group>
  );
};

function ModalFormComponent(props) {
  //console.log(props)
  const {handleSubmit} =props
  return (
  
        <Form onSubmit={handleSubmit} >
          <Field
            name="name"
            type="text"
            component={renderInput}
            label="ENter Name"
          ></Field>

          <Field
            name="email"
            type="text"
            component={renderInput}
            label="Email Adress"
          ></Field>

          <Field
            name="rollno"
            type="number"
            component={renderInput}
            label="Enter Your Roll No."
          ></Field>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
     
  );
}


ModalFormComponent = reduxForm({
  form: "item",
})(ModalFormComponent);

export default ModalFormComponent;
