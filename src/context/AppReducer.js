import { Action } from "@remix-run/router";

export default (state, action) => {
    switch(action.type){
        case "ADD_TO_READLIST":
            return{
                ...state,
                readlist: [action.payload, ...state.readlist]

            }

        default:
            return state;
    }
}