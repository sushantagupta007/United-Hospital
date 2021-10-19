import './App.css';
import Header from './Component/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import OurTeam from './Component/OurTeam/OurTeam';
import Home from './Component/Home/Home';
import Registraion from './Component/Registraion/Registraion';
import Services from './Component/Services/Services';

import Contact from './Component/Contact/Contact'
import NotFound from './Component/NotFound/NotFound';
import Login from './Component/Login/Login';


import Service from './Component/Service/Service';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Footer from './Component/Footer/Footer';
import AuthProvider from './Context/AuthProvider';


function App() {
  return (
<AuthProvider>
    <Router>

         <Header></Header>
        <Switch>
          
          <Route path="/Home">
            <Home></Home>
          </Route>
          <Route path="/OurTeam">
            <OurTeam></OurTeam>
          </Route>
          <Route path="/Services">
            <Services></Services>
          </Route>
          <PrivateRoute path="/Service/:serviceId">
            <Service></Service>
          </PrivateRoute>
          <Route path="/Login">
            <Login></Login>
          </Route>
          
          <Route path="/Registraion">
            <Registraion></Registraion>
            </Route>
          <Route path="/Contact">
            <Contact></Contact>
          </Route>
          <Route exact path ="/">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
      
  

      );
}

export default App;
