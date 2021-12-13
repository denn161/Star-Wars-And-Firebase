
import { ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE } from './actions'
import { omit } from 'lodash'
import { getLocalStorage } from '@utils/localStorage'


const initialState = getLocalStorage('store')

export const favoritesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_PERSON_TO_FAVORITE :            
        return {
          ...state,
          ...payload
        }
       case REMOVE_PERSON_FROM_FAVORITE:
        return omit(state,[payload])
    
        default:
         return state
    }

}