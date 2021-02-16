import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import EditPageForm from './EditPageForm'

function EditPage(props) {
    const dispatch=useDispatch()
    console.log(props.match.params.id)
    const id=props.match.params.id;
    
    const items=useSelector(state=> state.ProductReducer.items)
    // console.log(items)
    // console.log(id)
    let data=items.filter((item)=>item.id == id);
    data=data[0];
    //console.log(data)
    console.log(props);
    
    const submitHandler=(values)=>{
        //console.log(values)
        return dispatch({type:"UPDATE",payload:{values:values,id:id}});
    }
    


    return (
        <div>
            
            <EditPageForm  id={id} initialValues={data} onSubmit={submitHandler}></EditPageForm>
        </div>
    )
}

export default EditPage
