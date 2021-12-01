import './App.css';
import Appointment from './Component/Landing/Appointment/Appointment';
import Banner from './Component/Landing/Banner/Banner';
import Care from './Component/Landing/Care/Care';
import Contact from './Component/Landing/Contact/Contact';
import Doctors from './Component/Landing/Doctors/Doctors';
import Footer from './Component/Landing/Footer/Footer';


import Header from './Component/Landing/Header/Header';
import News from './Component/Landing/News/News';
import Services from './Component/Landing/Services/Services';
import Speciality from './Component/Landing/Speciality/Speciality';



function App() {

  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Care></Care>
      <Services></Services>
      <Speciality></Speciality>
      <Appointment></Appointment>
      <Doctors></Doctors>
      <News></News>
      <Contact></Contact>
      <Footer></Footer>
    </div>
     
      );
}

export default App;
