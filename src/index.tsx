import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/App';
import reportWebVitals from './reportWebVitals';
import "./index.css";

export type PostsDataType = {
        id: number,
        text: string,
        likesCount: number
}

export type MessagesDataType = {

}

const postsData: PostsDataType[] = [
    {id: 1, text: "Hello, I'm happy!", likesCount: 12},
    {id: 2, text: "I wish to see you", likesCount: 45},
    {id: 2, text: "I wish to see you", likesCount: 45}
]

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App posts={postsData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
