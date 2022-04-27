import React,{useState,useReducer} from 'react'
import Modal from './Modal'
import { reducer } from './reduce'


const defaulState = {
    people: [],
    isModalOpen: false,
    modalContent:''
}

function Form() {
    const [name,setName] = useState('')
    const [state,dispatch] = useReducer(reducer,defaulState)

    const handleSubmit = (e) =>{
        e.preventDefault()
        
        if(name){
            const newItem = {id: new Date().getTime().toString(), name}
            dispatch({ type: 'ADD_ITEM',payload: newItem})
        }
    }

    const closeModal = () =>{
        dispatch({ type: 'CLOSE_MODAL'})
    }
  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent}  closeModal={closeModal}/>}
      <form onSubmit={handleSubmit}>
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
          <button type='submit'>Add</button>
      </form>
      {state.people.map((person) =>(
          <div className='data' key={person.id}>
                <p>{person.name}</p>
                <button>remove</button>
          </div>
      ))}
    </>
  )
}

export default Form