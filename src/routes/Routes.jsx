import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Switch, Route, Redirect } from "react-router-dom";
import { allRoutes } from './allRoutes'
import PrivateRoute from './PrivateRoute';

export default function Routes() {
    return (
        <Switch>
            {allRoutes.map((route, i) =>
                route.isPrivate ? (
                    <PrivateRoute key={uuidv4()} path={route.path} component={route.component} exact />
                ) : (
                    <Route key={uuidv4()} path={route.path} component={route.component} exact />
                )
            )}
            <Redirect to="/" />
        </Switch>
    )
}
