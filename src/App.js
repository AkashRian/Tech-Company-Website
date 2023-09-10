import './App.css';
import Banner from './Components/Banner';
import BoxContainer from './Components/Boxcontainer';
// import Choose from './Components/Choose';
import Crousel from './Components/Crousel';
import Dummyf from './Components/Dummyf';
import Footer from './Components/Footer';
import Header from './Components/Header';
// import Ofooter from './Components/Ofooter';
import Service from './Components/Service';
import Testimonial from './Components/Testimon';
// import Update from './Components/Update';
import Why from './Components/Why';
import Card from './Components/card';

function App() {
  return (
    <div className="App">
    <Header />
    <Banner />
    <Crousel />
    <BoxContainer />
    <Card />
    <Service />
    {/* <Choose /> */}
    <Testimonial />
    <Why />
    {/* <Update /> */}
    <Footer />
    {/* <Ofooter /> */}
    <Dummyf />

    
    
    
    
    
    </div>
  );
}

export default App;
