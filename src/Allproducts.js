import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import InlineEditForm from "./InlineEditForm";
import ModalComponent from "./ModalComponent";

function Allproducts(props) {
  let items = useSelector((state) => state.ProductReducer.items);
  console.log(items);

  const Dispatch = useDispatch();

  const deleteHandler = (id) => {
    console.log(id);
    var shouldDelete = window.confirm("Do you really want to delete ?");
    if (shouldDelete) {
      return Dispatch({ type: "DELETE", payload: id });
    }
  };

  const EditModal = (id) => {
    return Dispatch({ type: "OPEN", payload: { id: id, items: items } });
  };

  const All = () => {
    return items.map((item, index) => {
      console.log(item);
      return (
        <React.Fragment key={item.id}>
          <InlineEditForm
            index={index}
            initialValues={item}
            form={`INLINE_EDIT${item.id}`}
            EditModal={EditModal}
            deleteHandler={deleteHandler}
            item={item}
          ></InlineEditForm>
          {/* <tbody>
          <tr key={item.id}>
            <th scope="row">{index}</th>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.rollno}</td>
            <td
              onClick={() => deleteHandler(item.id)}
              style={{ cursor: "pointer" }}
            >
              {" "}
              Delete
            </td>

            <td>
              {" "}
              <Link to={`/edit/${item.id}`}>Edit</Link>{" "}
            </td>

            <td onClick={()=>EditModal(item.id)}>EDIT MODAL</td>
          </tr>
          </tbody> */}
        </React.Fragment>
      );
    });
  };

  return <>{All()}</>;
}

export default Allproducts;
