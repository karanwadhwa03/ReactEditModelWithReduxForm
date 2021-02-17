import React,{useState} from "react";
import ModalFormComponent from "./ModalFormComponent";
import {Modal,Button} from 'react-bootstrap'
import {useDispatch ,useSelector} from 'react-redux'

function ModalChild(props) {
    //const {handleClose,show} = props
    const Dispatch=useDispatch();
    const data = useSelector(state => state.ModalReducer.data);
    const id=data.id;
    const handleClose=()=>{
        return Dispatch({type:"CLOSE"})
    }
    const ModalSubmit=(values)=>{
        Dispatch({ type: "UPDATE", payload: { values: values, id: id } });
        handleClose();
    }
    

    return (
      <>
        
  
        <Modal
          show={true}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           <ModalFormComponent initialValues={data} onSubmit={ModalSubmit} ></ModalFormComponent>
          </Modal.Body>
        </Modal>
      </>
    );
  }
  
export default ModalChild