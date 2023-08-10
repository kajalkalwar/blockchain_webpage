import './App.css';
import BlockChain from './Components/BlockChain';
import DigitalEntertainment from './Components/DigitalEntertainment';
import FamilyOffice from './Components/FamilyOffice';
import HomePage from './Components/HomePage';
import LegalAdvisory from './Components/LegalAdvisory';
import OurMission from './Components/OurMission';
import Footer from './Footer/Footer';

function App() {
  return (
    <div>
      <HomePage/>
      <OurMission/>
      <DigitalEntertainment/>
      <BlockChain/>
      <FamilyOffice/>
      <LegalAdvisory/>
      <Footer/>
    </div>
  );
}

export default App;
