import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {Link} from 'react-router-dom'

function Allproducts() {
  let items = useSelector((state) => state.ProductReducer.items);
  console.log(items);

  const Dispatch=useDispatch();

  const deleteHandler=(id)=>{
      console.log(id)
       return Dispatch({type:"DELETE",payload:id})
  }


  const All = () => {
   return items.map((item, index) => {
        console.log(item)
      return (
        <tr key={item.id}>
          <th scope="row">{index}</th>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.rollno}</td>
          <td onClick={()=>deleteHandler(item.id)} style={{cursor:'pointer'}}>   Delete</td>

          <td> <Link to={`/edit/${item.id}`} >Edit</Link>   </td>
        </tr>
      );
    });
  };

return(
   <>   
  
        {All()}
  </>)
}

export default Allproducts;
