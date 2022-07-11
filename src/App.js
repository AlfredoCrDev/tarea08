import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import Slider from './components/Slider';
import Pilares from './components/Pilares';
import Footer from './components/Footer';
import Contenido from './components/Contenido';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Slider></Slider>
      <Contenido></Contenido>
      <Pilares></Pilares>
      <Footer></Footer>
    </div>
  );
}

export default App;
