import React,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ModalComponent from './ModalComponent'


function Allproducts() {
 
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

  const EditModal=(id)=>{
    return Dispatch({type:"OPEN",payload:{id:id,items:items}})
    
  }



  const All = () => {
    return items.map((item, index) => {
      console.log(item);
      return (
        <>
        
        <tbody>
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
          </tbody>
        </>
      );
    });
  };

  return <>{All()}</>;
}

export default Allproducts;
