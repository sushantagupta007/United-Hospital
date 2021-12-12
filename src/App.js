import './App.css';

import Home from './Pages/Home/Home';
import About from './Pages/About/About';

import {

  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ServiceProvide from './Pages/ServiceProvide/ServiceProvide';

import DoctorsPage from './Pages/DoctorsPage/DoctorsPage';
import Contact from './Component/Contact/Contact';
import ContactPage from './Pages/ContactPage/ContactPage';




function App() {

  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/service">
          <ServiceProvide></ServiceProvide>
        </Route>
        <Route path="/doctor">
          <DoctorsPage></DoctorsPage>
        </Route>
        <Route path="/contact">
          <ContactPage></ContactPage>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
     
      );
}

export default App;
