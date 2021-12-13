import React from 'react'
import { Provider } from 'react-redux';
import ThemeProvider from '@context'
import { store } from '../../store';
import Router from '../Router';
// import styles from './App.module.css'

const App = () => {

    return (
    <Provider store={store}>
     <ThemeProvider>
         <Router />
     </ThemeProvider>    
    </Provider>
    )
}

export default App;
