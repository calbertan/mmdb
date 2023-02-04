import { Action } from "@remix-run/router";

export default (state, action) => {
    switch(action.type){
        case "ADD_TO_READLIST":
            return{
                ...state,
                readlist: [action.payload, ...state.readlist]

            }
        case "REMOVE_FROM_READLIST":
            return{
                ...state,
                readlist: state.readlist.filter(manga => manga.mal_id !== action.payload)
            }

        case "COMPLETED_READING":
            return{
                ...state,
                readlist: state.readlist.filter(manga => manga.mal_id !== action.payload.mal_id),
                completed: [action.payload, ...state.completed]
            }

            
        case "MOVE_TO_READLIST":
            return{
                ...state,
                completed: state.completed.filter(manga => manga.mal_id !== action.payload.mal_id),
                readlist: [action.payload, ...state.readlist]
            }
            
        case "REMOVE_FROM_COMPLETED":
            return{
                ...state,
                completed: state.completed.filter(manga => manga.mal_id !== action.payload),
            }
        default:
            return state;
    }
}