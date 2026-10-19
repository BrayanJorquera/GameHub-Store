import { useState, useMemo } from 'react'
import ListaProductos, { productosData } from "../components/data/productos"
import "./catalogo.css"

function Catalogo() {
  const [categoria, setCategoria] = useState('todas')
  const [precioMin, setPrecioMin] = useState('')
  const [precioMax, setPrecioMax] = useState('')
  const [criterioOrden, setCriterioOrden] = useState('nombre-asc')

  //Obtener categorías únicas disponibles automáticamente
  const categoriasDisponibles = ['todas', ...new Set(productosData.map(p => p.categoria))]

  //Filtrado y ordenamiento dinámico
  const productosFiltrados = useMemo(() => {
    return productosData
      .filter((producto) => {
        //Filtro por categoría
        if (categoria !== 'todas' && producto.categoria !== categoria) {
          return false
        }
        //Filtro por precio mínimo
        if (precioMin !== '' && producto.precio < Number(precioMin)) {
          return false
        }
        //Filtro por precio máximo
        if (precioMax !== '' && producto.precio > Number(precioMax)) {
          return false
        }
        return true
      })
      //Ordenamiento según el criterio seleccionado
      .sort((a, b) => {
        switch (criterioOrden) {
          case 'precio-asc':
            return a.precio - b.precio
          case 'precio-desc':
            return b.precio - a.precio
          case 'nombre-asc':
            return a.nombre.localeCompare(b.nombre)
          case 'nombre-desc':
            return b.nombre.localeCompare(a.nombre)
          default:
            return 0
        }
      })
  }, [categoria, precioMin, precioMax, criterioOrden])

  return (
    <div className="catalogo-layout">
      <div className="panel-filtros">

        {/* Categoría */}
        <div className="grupo-filtro">
          <label htmlFor="categoria">Categoría</label>
          <select 
            id="categoria" 
            value={categoria} 
            onChange={(e) => setCategoria(e.target.value)}
          >
            {categoriasDisponibles.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="grupo-filtro">
          <label>Rango de Precio</label>
          <div className="inputs-precio">
            <input
              type="number"
              placeholder="Mín"
              value={precioMin}
              onChange={(e) => setPrecioMin(e.target.value)}
            />
            <span>-</span>
            <input
              type="number"
              placeholder="Máx"
              value={precioMax}
              onChange={(e) => setPrecioMax(e.target.value)}
            />
          </div>
        </div>

        <div className="grupo-filtro">
          <label htmlFor="orden">Ordenar por</label>
          <select 
            id="orden" 
            value={criterioOrden} 
            onChange={(e) => setCriterioOrden(e.target.value)}
          >
            <option value="nombre-asc">Nombre (A - Z)</option>
            <option value="nombre-desc">Nombre (Z - A)</option>
            <option value="precio-asc">Precio: Menor a Mayor</option>
            <option value="precio-desc">Precio: Mayor a Menor</option>
          </select>
        </div>
      </div>

      <section className="contenido-catalogo">
        <ListaProductos productos={productosFiltrados} />
      </section>
    </div>
  )
}

export default Catalogo