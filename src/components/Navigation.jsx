import { BrowserRouter, Route, Link } from 'react-router-dom';

function Navigation() {
  return (
  <header>
    <div class="logo">
      <h1><Link to='/'>GameHub Store</Link></h1>
    </div>  
    <nav>
      <ul>
        <li><Link to='/'>Inicio</Link></li>
        <li><Link to='/Catalogo'>Catálogo</Link></li>
        <li><Link to='/Carrito'>Carrito</Link></li>
        <li><Link to='/Ordenes'>Mis Órdenes</Link></li>
        <li><Link to='/Login'>Login</Link></li>
      </ul>
    </nav>
  </header>
  )
}

export default Navigation  