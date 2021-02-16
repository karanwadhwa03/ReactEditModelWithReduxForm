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

function FormComponent(props) {
  const {handleSubmit} =props
  return (
    <div className="row p-5 justify-content-center">
      <div className="col-md-6">
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
      </div>
    </div>
  );
}


FormComponent = reduxForm({
  form: "item",
})(FormComponent);

export default FormComponent;
