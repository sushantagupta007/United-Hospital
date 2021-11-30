import './App.css';
import Appointment from './Component/Landing/Appointment/Appointment';
import Banner from './Component/Landing/Banner/Banner';
import Care from './Component/Landing/Care/Care';


import Header from './Component/Landing/Header/Header';
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
    </div>
     
      );
}

export default App;
