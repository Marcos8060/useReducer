import React,{useEffect} from 'react'

function Modal({ modalContent, closeModal}) {

    useEffect(() =>{
        setTimeout(() =>{
            closeModal();
        },3000)
    },[])
  return (
    <div className='modal'>{modalContent}</div>
  )
}

export default Modal