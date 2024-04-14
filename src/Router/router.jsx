import React from 'react'
import {createBrowserRouter} from 'react-router-dom'
import List from '../View/pages/List/List';
import Detail from '../View/pages/Detail';

const router = createBrowserRouter([
    {
        path: "/",
        element: <List/>,
    },
    {
        path: "/detail/:number",
        element: <Detail/>
    },
]);

export default router;