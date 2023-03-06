import logo from './logo.svg';
import './App.css';
import Nav from './components/nav-componentFolder/nav-component.jsx';
import images from './utility/images/images';
import { AllPhotos } from './components/gallery-componentFolder/gallery-component';
import ServiceList from './components/serviceList-componentFolder/serviceList-component';
import AboutUs from './components/About-componentFolder/About-component';
import Footer from './components/footer-componentFolder/footer-component';
const App = () => {
// console.log(Object.entries(images)[1][1]);
// console.log(Object.values(images));
const l = [] 
for(const i of Object.entries(images))l.push(i[1]);
// console.log(l);
  return (
    <div className="App">
      <Nav/>
      <ServiceList/>
      <AboutUs/>
      <AllPhotos/>
      <Footer/>
        
    </div>
  );
}

export default App;
