export const reducer = (state,action) =>{
    if(action.type === 'ADD_ITEM'){
        const newPeople = [...state.people,action.payload]
        return {
            ...state,
            people: newPeople,
            isModalOpen: true,
            modalContent: 'item added'
        }
    }
    if(action.type === 'REMOVE_ITEM'){
        const newPeople = state.people.filter((person) => person.id !== action.payload)
        return {
            ...state,
            people: newPeople,
        }
    }
    if(action.type === 'CLOSE_MODAL'){
        return {
            ...state,
            isModalOpen: false
        }
    }
    if(action.type === 'NO_ITEM'){
        return {
            ...state,
            isModalOpen:true,
            modalContent: 'please add an item!'
        }
    }
    return state
}

