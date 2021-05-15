import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import Browse from './pages/browse'
import Home from './pages/home'
import Signin from './pages/signin'
import Signup from './pages/signup'
import useAuthListener  from './hooks/use-auth-listener';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';

export function App() {
  const { user } = useAuthListener();
  
  return (
    <Router>
        <Switch>
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
                <Signin />
            </IsUserRedirect>
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
                <Signup />
            </IsUserRedirect>
            <ProtectedRoute user={user} path={ROUTES.BROWSE}>
                <Browse />
            </ProtectedRoute>
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
                <Home />
            </IsUserRedirect>
        </Switch>
    </Router>
  );
}
