import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { favoritesReducer } from './favorites/favoritesReducer'
import { setLoacalStorage } from '@utils/localStorage'
import { reducerAuth } from './auth/reducerAuth'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducers = combineReducers({
  favorites: favoritesReducer,
  auth :reducerAuth
})


export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

store.subscribe(() => {
  setLoacalStorage('store',store.getState().favorites)
})