import React from 'react';
import {Switch, Route} from  'react-router-dom';

import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Post from './components/Post/Post';

export default(
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route path='/post' component={Post} />
        <Route path='/new' component={Form} />
    </Switch>
)