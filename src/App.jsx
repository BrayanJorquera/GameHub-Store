import { Routes, Route} from 'react-router-dom';
// Header navegable y footer
import Navigation from './components/navigation.jsx'
import Footer from './components/Footer.jsx'
// Importacion de las distintas vistas
import Inicio from './pages/inicio';
import Catalogo from './pages/catalogo';
import Carrito from './pages/carrito';
import Ordenes from './pages/ordenes';
import Login from './pages/login';
import Checkout from './pages/checkout';
import Detalle from './pages/detalle';
import './utilities.css'

function App() {
  return (
    <>
      <Navigation/>
    
      <main>
        <Routes>
          <Route path="/" exact element={<Inicio />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/ordenes" element={<Ordenes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/detalle" element={<Detalle />} />
        </Routes>
      </main>
    
      <Footer/>

      <script src="js/logica/validation.js"></script>
      <script src="js/logica/data.js"></script>
      <script src="js/logica/main.js"></script>
    </>
  )
}

export default App
