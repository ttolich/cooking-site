import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserBlog from "./blog/UserBlog";
import {BrowserRouter} from "react-router-dom";

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Context.Provider value={{
            user: new UserBlog(),
        }}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Context.Provider>
    </React.StrictMode>
);

