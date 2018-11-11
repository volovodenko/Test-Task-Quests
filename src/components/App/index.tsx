import React from 'react';
import {Switch, Route} from 'react-router-dom';


import './styles.scss';
import {routes} from 'src/routes';


export const App = () => {
    return (
        <div className='wrapper'>
            <Switch>
                {
                    routes.map(route => (
                        <Route
                            key={route.name}
                            exact={route.isExact}
                            path={route.path}
                            component={route.component}
                        />
                    ))
                }
            </Switch>
        </div>
    );
};
