import { ADD_FAVORITES } from "./types";
import { DELETE_FAVORITES } from "./types";

const initialState = {
    myFavorites: [],

};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITES:
            return {
                ...state,
                myFavorites: [...state.list, action.payload]
            }
        case DELETE_FAVORITES:
            return {
                ...state,
                myFavorites: state.myFavorites.filter((product) => {
                    return product.id !== action.payload
                }),
            }
        default:
            return { ...state }
    }
}

export default rootReducer;