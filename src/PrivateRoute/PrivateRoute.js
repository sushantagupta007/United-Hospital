import { Redirect, Route } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


function PrivateRoute({ children, ...rest }) {
      const {loggedUser} = useAuth();
    return (
      <Route
        {...rest}
        render={({ location }) =>
          loggedUser.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/signin",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
  export default PrivateRoute 