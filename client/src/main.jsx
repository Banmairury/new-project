import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
//import components
import App from './App';
import FormComponent from './components/FormComponent';
import SingleComponent from './components/SingleComponent'
// import MyRoute from './MyRoute';


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        // errorElement: <Error />
    },
    {
        path: '/create',
        element: <FormComponent />,
        // errorElement: <Error />
    },
    {
        path: '/blog/:slug',
        element: <SingleComponent/>,
        // errorElement: <Error />
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//       <MyRoute />
//     </React.StrictMode>,
//   )
  