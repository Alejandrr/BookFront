import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import BookStore from "./store/BookStore";

export const Context=createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
       book:new BookStore()
    }}>
        <App/>
    </Context.Provider>


);

