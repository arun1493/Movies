import React, { lazy, Suspense } from 'react';
import paths from './constants';
import Layout from '../layout/layout';

const routes = [
    {
        path: paths.index,
        exact: true,
        component: () => <div><Layout/></div>
    },
];

export default routes;