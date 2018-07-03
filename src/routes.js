// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './Components/App';
import Main from './Components/Modulars/Main/Main'
import Login from './Components/Modulars/Login/Login'
import Page404 from './Components/Modulars/Page404/Page404'

const AppRoutes = () => 
    <App>
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/main" component={Main} />
            <Route exact component={Page404} />
        </Switch>
    </App>      

export default AppRoutes;
