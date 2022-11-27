import './App.css';
import Mynav from './Mynav';
import "bootstrap/dist/css/bootstrap.css"
import Slider from './Slider';
import Footer from './Footer';
import Products from './Products';
import Counter from './Counter';
import Error from './Error';
import { Route, Routes } from 'react-router-dom';
import Productes_Content from './Productes_Content';
function App() {
  return (
    <div className="bg-dark">
      <Mynav />
      <Routes>
        <Route path="/home" element={<Slider />} />
        <Route path="/productes" element={<Products />} />
        <Route path="/productes/:id" element={<Productes_Content />} />
        <Route path="/about" element={<Counter />} />
        <Route path="*" element={<Error/>} />
        {/* 
        
        <Counter /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
