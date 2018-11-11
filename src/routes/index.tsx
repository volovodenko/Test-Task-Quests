import React from 'react';


import {MainPage, QuestInfoPage, NotFoundPage} from 'src/pages';


export const routes = [
    {
        name: 'Home',
        path: '/',
        isExact: true,
        component: MainPage
    },
    {
        name: 'Quest Info',
        path: '/quest-info/:alias',
        isExact: true,
        component: QuestInfoPage
    },
    {
        name: 'Not Found',
        path: '*',
        isExact: false,
        component: NotFoundPage
    },
];
