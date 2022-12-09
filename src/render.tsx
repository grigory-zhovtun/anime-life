import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/app/App';
import {addPost, state, StateType} from "./redux/state";

export const rerenderEntireTree = (state: StateType) => {
    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );
    root.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
            />
        </React.StrictMode>
    );
}



