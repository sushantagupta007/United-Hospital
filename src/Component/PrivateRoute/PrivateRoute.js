import React from 'react';

import { Route,Redirect } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({children,...rest}) => {
    const {user} = useAuth();
    console.log(user.location)
    return (
        <Route
            {...rest}
            render = {({location})=> user.email ? children :
            
            <Redirect
            to={{
                pathname: "/Login",
                state: { from: location }
              }}
            ></Redirect>}
        >
            
        </Route>
    );
};
  
export default PrivateRoute;