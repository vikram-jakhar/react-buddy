import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header';
import Section1 from './Components/Section1';
import { Mapcard } from './Components/Mapcard';
import Rodmap from './Components/Rodmap';
import Faq from './Components/Faq';
function App() {
  return (
 <div>
  <Header />
    <Section1 />
    <Mapcard/>
    <Rodmap/>
    <Faq/>
 </div>
  );
}

export default App;
