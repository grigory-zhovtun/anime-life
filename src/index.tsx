import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './components/app/App';
import "./index.css";
import store from "./redux/redux-store";
import reportWebVitals from './reportWebVitals';

export type StoreReduxType = typeof store;


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            {/* <App store={store}/> */}
            <App store={store}/>
        </Provider>
    </React.StrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
