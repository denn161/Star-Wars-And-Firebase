
export const ADD_PERSON_TO_FAVORITE = 'ADD_PERSON::FAVORITES'
export const REMOVE_PERSON_FROM_FAVORITE = 'REMOVE_PERSON::FAVORITES'



export const addPersonToFavorite = (personFavorite)=> ({
    type: ADD_PERSON_TO_FAVORITE,
    payload:personFavorite
})


export const removePersonToFavorite = (id) => ({
    type: REMOVE_PERSON_FROM_FAVORITE,
    payload:id

})