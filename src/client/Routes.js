import React, { Component } from 'react'
import HomePage from "./pages/Home";
import UsersListPage from "./pages/UserList";

export default [
    {
        ...HomePage,
        path: "/",
        exact: true
    },
    {
        ...UsersListPage,
        path: "/users",
    }
]