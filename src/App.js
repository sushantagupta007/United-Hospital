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

import ContactPage from './Pages/ContactPage/ContactPage';
import AppointmentPage from './Pages/AppointmentPage/AppointmentPage';
import Blog from './Pages/Blog/Blog';
import SingleNews from './Pages/SingleNews/SingleNews';
import AuthProvider from './AuthProvider/AuthProvider';




function App() {

  return (
  <AuthProvider>
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
        <Route path="/appointment">
          <AppointmentPage></AppointmentPage>
        </Route>
        <Route path="/blog">
          <Blog></Blog>
        </Route>
        <Route path="/singlenews">
          <SingleNews></SingleNews>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  </AuthProvider>
    
     
      );
}

export default App;
