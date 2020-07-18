import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

import ContactsDashboard from '../components/ContactsDashboard';
import EditContact from '../components/EditContact';
import ChatForm from '../components/ChatForm';
import ViewContact from '../components/ViewContact';

const AppRouter = () => {
    const history = createBrowserHistory();
    return(
        <Router history={history}>
            <Switch>
                <Route path="/" component={ContactsDashboard} exact={true}/>
                <Route path="/edit/:id" component={EditContact} />
                <Route path="/chat/:id" component={ChatForm} />
                <Route path="/contact/:id" component={ViewContact} />
            </Switch>
        </Router>
    )
}

export default AppRouter;