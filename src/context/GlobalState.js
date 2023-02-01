import React, {createContext, useReducer, useEffect} from 'react'
import AppReducer from "./AppReducer"

//initial state
const initialState = {
    readlist: [],
    completed: [],
};

//create context
export const GlobalContext = createContext(initialState);

//provide components
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //actions
    const addToReadlist = manga => {
        dispatch({type:"ADD_TO_READLIST", payload:manga});
    };

    return(
        <GlobalContext.Provider value={
            {readlist:state.readlist, 
            completed: state.completed,
            addToReadlist: addToReadlist,
            }}>
            {/*wraps all elements so global context can be accessed by other components */}
            {props.children}    
        </GlobalContext.Provider>
    )
}