function Catalogo() {
  return (
    <main>
      <h2>Catálogo de Productos</h2>

      
      <section style="background-color: var(--color-superficie); padding: 1.5rem; border-radius: var(--radio-borde); margin: 1.5rem 0;">
        <form id="form-filtro" onsubmit="event.preventDefault();" style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: flex-end;">

          
          <div style="flex: 1; min-width: 180px;">
            <label for="filtro-categoria" style="display: block; margin-bottom: 0.3rem;">Categoría:</label>
            <select id="filtro-categoria" onchange="renderizarCatalogo()" style="width: 100%; padding: 0.5rem; border-radius: var(--radio-borde);">
              <option value="todas">Todas las categorías</option>
            </select>
          </div>

          
          <div style="flex: 1; min-width: 140px;">
            <label for="precio-min" style="display: block; margin-bottom: 0.3rem;">Precio Mínimo:</label>
            <input type="number" id="precio-min" placeholder="$0" oninput="renderizarCatalogo()" style="width: 100%; padding: 0.5rem; border-radius: var(--radio-borde);" />
          </div>

          <div style="flex: 1; min-width: 140px;">
            <label for="precio-max" style="display: block; margin-bottom: 0.3rem;">Precio Máximo:</label>
            <input type="number" id="precio-max" placeholder="$ Max" oninput="renderizarCatalogo()" style="width: 100%; padding: 0.5rem; border-radius: var(--radio-borde);" />
          </div>

          
          <div style="flex: 1; min-width: 180px;">
            <label for="filtro-orden" style="display: block; margin-bottom: 0.3rem;">Ordenar por:</label>
            <select id="filtro-orden" onchange="renderizarCatalogo()" style="width: 100%; padding: 0.5rem; border-radius: var(--radio-borde);">
              <option value="predeterminado">Predeterminado</option>
              <option value="precio-asc">Precio: Menor a Mayor</option>
              <option value="precio-desc">Precio: Mayor a Menor</option>
              <option value="nombre-asc">Nombre: A - Z</option>
              <option value="nombre-desc">Nombre: Z - A</option>
            </select>
          </div>

        </form>
        <p id="error-filtro-precio" class="mensaje-error" style="margin-top: 0.5rem;"></p>
      </section>

      
      <section>
        <div id="contenedor-catalogo" class="grid-productos">
        
        </div>
      </section>
    </main>
  )
}

export default Catalogo