import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ path, component: Component }) {
    return (
        <Route
            path={path}
            exact
            render={(props) => {
                if (localStorage.getItem('session_id')) {
                    return <Component />;
                }
                return <Redirect to={`${process.env.REACT_APP_REDIRECT_LINK}/login`} />;

            }}
        />
    );
}

export default PrivateRoute;
