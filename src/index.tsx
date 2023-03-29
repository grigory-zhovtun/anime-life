import React from 'react';
import reportWebVitals from './reportWebVitals';
import "./index.css";
import ReactDOM from 'react-dom/client';
import {App} from './components/app/App';
import {store} from "./redux/store";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
const rerenderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>
    );
}

rerenderEntireTree();
store.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
