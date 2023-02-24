import React, {createContext, useReducer, useEffect} from 'react'
import AppReducer from "./AppReducer"

//initial state is set to localstorage if its not empty, set to [] otherwise
const initialState = {
    readlist: localStorage.getItem('readlist') 
    ? JSON.parse(localStorage.getItem('readlist')) : [],
    completed: localStorage.getItem('completed') 
    ? JSON.parse(localStorage.getItem('completed')) : [],
    username: localStorage.getItem('username') 
    ? localStorage.getItem('username') : "",
};

//create context
export const GlobalContext = createContext(initialState);

//provide components
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Triggered when state is changed in provider (item is added)
    useEffect(() => {
        localStorage.setItem('readlist', JSON.stringify(state.readlist));
        localStorage.setItem('completed', JSON.stringify(state.completed));
        localStorage.setItem('username', state.username)
    }, [state]);

    //actions
    const addToReadlist = manga => {
        dispatch({type:"ADD_TO_READLIST", payload:manga});
    };

    const removeFromReadlist = id =>{
        dispatch({type:"REMOVE_FROM_READLIST", payload:id})
    };

    const completedReading = manga =>{
        dispatch({type:"COMPLETED_READING", payload:manga})
    };

    const moveToReadlist = manga =>{
        dispatch({type:"MOVE_TO_READLIST", payload:manga})
    };

    const removeFromCompleted = id =>{
        dispatch({type:"REMOVE_FROM_COMPLETED", payload:id})
    };

    const toggleLogin = user =>{
        dispatch({type:"TOGGLE_LOGIN", payload:user})
    }

    return(
        <GlobalContext.Provider value={
            {readlist:state.readlist, 
            completed: state.completed,
            username: state.loggedin,
            addToReadlist,
            removeFromReadlist,
            completedReading,
            moveToReadlist,
            removeFromCompleted,
            toggleLogin,
            }}>
            {/*wraps all elements so global context can be accessed by other components */}
            {props.children}    
        </GlobalContext.Provider>
    )
}