import './App.css';

import Home from './Pages/Home/Home';
import About from './Pages/About/About';

import {

  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import ServiceProvide from './Pages/ServiceProvide/ServiceProvide';

import DoctorsPage from './Pages/DoctorsPage/DoctorsPage';

import ContactPage from './Pages/ContactPage/ContactPage';
import AppointmentPage from './Pages/AppointmentPage/AppointmentPage';
import Blog from './Pages/Blog/Blog';
import SingleNews from './Pages/SingleNews/SingleNews';
import AuthProvider from './AuthProvider/AuthProvider';
import RepeatSingleNews from './Component/RepeatSingleNews/RepeatSingleNews';
import Registration from './Component/Registration/Registration';

import SignIn from './Component/SignIn/SignIn';
import SignUp from './Component/SignUp/SignUp';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import DoctorProfile from './Component/DoctorProfile/DoctorProfile';


import SpecialityDetails from './Component/SpecialityDetails/SpecialityDetails';
import ServiceDetails from './Component/ServiceDetails/ServiceDetails';
import ForgotPassword from './Component/ForgotPassword/ForgotPassword';
import Admin from './Component/Admin/Admin.js'
import Review from './Component/Review/Review';
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
        <Route path="/doctorprofile">
          <DoctorProfile></DoctorProfile>
        </Route>
        <Route path="/contact">
          <ContactPage></ContactPage>
        </Route>
        <PrivateRoute path="/appointment">
          <AppointmentPage></AppointmentPage>
        </PrivateRoute>
        <Route path="/singlenews/:category/:id">
          <SingleNews></SingleNews>
        </Route>
        <Route exact path="/blog">
          <Blog></Blog>
        </Route>
        <Route path="/regis">
          <Registration></Registration>
        </Route>
        <Route path="/signin">
          <SignIn></SignIn>
        </Route>
        <Route path="/signup">
          <SignUp></SignUp>
        </Route>
        <Route path="/passwordreset">
          <ForgotPassword></ForgotPassword>
        </Route>
        <Route path="/repeatSingle">
         <RepeatSingleNews></RepeatSingleNews>
        </Route>
        <Route path="/specialityDetails">
          <SpecialityDetails></SpecialityDetails>
        </Route>
        <Route path="/serviceDetails">
          <ServiceDetails></ServiceDetails>
        </Route>
        <Route path="/admin"> <Admin></Admin></Route>
        <Route path="/review"><Review></Review></Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  </AuthProvider>
    
     
      );
}

export default App;
