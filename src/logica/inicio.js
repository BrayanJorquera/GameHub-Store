function cargarProductosDestacados() {
  const contenedor = document.getElementById("contenedor-destacados");
  if (!contenedor) return;

  const destacados = productos.filter(p => p.destacado);
  contenedor.innerHTML = "";

  destacados.forEach(prod => {
    const tarjeta = document.createElement("article");
    tarjeta.classList.add("tarjeta-producto");

    const sinStock = prod.stock === 0;
    const textoBoton = sinStock ? "Sin Stock" : "Agregar al Carrito";
    const estadoBoton = sinStock ? "disabled" : "";

    const precioHTML = prod.precioOferta
      ? `<p class="precio"><del style="color: #482e2e; font-size: 0.85rem;">$${prod.precio.toLocaleString("es-CL")}</del> <strong>$${prod.precioOferta.toLocaleString("es-CL")}</strong></p>`
      : `<p class="precio">$${prod.precio.toLocaleString("es-CL")}</p>`;

    tarjeta.innerHTML = `
      <a href="detalle.html?id=${prod.id}">
        <img src="${prod.imagen}" alt="${prod.nombre}">
        <h3>${prod.nombre}</h3>
      </a>
      <p class="descripcion">${prod.descripcion}</p>
      ${precioHTML}
      <button class="boton-primario" ${estadoBoton} onclick="agregarAlCarrito(${prod.id})">${textoBoton}</button>
      <a href="detalle.html?id=${prod.id}" style="display: block; margin-top: 0.5rem; text-align: center; color: var(--color-acento);">Ver detalle</a>
    `;

    contenedor.appendChild(tarjeta);
  });
}