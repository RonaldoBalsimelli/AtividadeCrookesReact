import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home/index';
import Page1 from './Pages/Page1/index';
import Page2 from './Pages/Page2/index';
import Page3 from './Pages/Page3/index';

export default () => {
        
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/pag1">
                <Page1 />
            </Route>

            <Route  exact path="/pag2">
                <Page2 />
            </Route>

            <Route exact path="/pag3">
                <Page3 /> 
            </Route>
        </Switch>
    );
}
