import React from 'react'
import {createBrowserRouter} from 'react-router-dom'
import List from './View/page/List/List';
import Detail from './View/page/Detail';

const router = createBrowserRouter([
    {
        path: "/",
        element: <List/>,
    },
    {
        path: "/detail",
        element: <Detail/>
    },
]);

export default router;