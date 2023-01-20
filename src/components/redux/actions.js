import { ADD_FAVORITES, DELETE_FAVORITES } from "./types";


export const addFavorites = (fav) => {
    return (
        { type: ADD_FAVORITES, payload: fav }
    )
}

export const deleteFavorites = (id) => {
    return (
        { type: DELETE_FAVORITES, payload: id }
    )
}



