function Checkout() {
  return (
    <main style="padding: 2rem; max-width: 800px; margin: 0 auto;">
      <h2>Finalizar Compra</h2>
      <p style="margin-bottom: 2rem;">Ingresa tus datos de despacho para completar la orden.</p>

      //Formulario de Checkout (Validado por validation.js)
      <form id="form-checkout" style="background-color: var(--color-superficie); padding: 2rem; border-radius: var(--radio-borde); display: flex; flex-direction: column; gap: 1.2rem;">

        <div>
          <label for="nombre" style="display: block; margin-bottom: 0.5rem;">Nombre Completo:</label>
          <input type="text" id="nombre" name="nombre" placeholder="Ej: Juan Pérez" style="width: 100%; padding: 0.6rem; border-radius: var(--radio-borde); border: 1px solid var(--color-fondo);" />
        </div>

        <div>
          <label for="email" style="display: block; margin-bottom: 0.5rem;">Correo Electrónico:</label>
          <input type="email" id="email" name="email" placeholder="ejemplo@correo.com" style="width: 100%; padding: 0.6rem; border-radius: var(--radio-borde); border: 1px solid var(--color-fondo);" />
        </div>

        <div>
          <label for="telefono" style="display: block; margin-bottom: 0.5rem;">Teléfono de Contacto:</label>
          <input type="tel" id="telefono" name="telefono" placeholder="Ej: 912345678" style="width: 100%; padding: 0.6rem; border-radius: var(--radio-borde); border: 1px solid var(--color-fondo);" />
        </div>

        <div>
          <label for="direccion" style="display: block; margin-bottom: 0.5rem;">Dirección de Despacho:</label>
          <input type="text" id="direccion" name="direccion" placeholder="Ej: Av. Principal 123, Depto 45" style="width: 100%; padding: 0.6rem; border-radius: var(--radio-borde); border: 1px solid var(--color-fondo);" />
        </div>

        <div>
          <label for="metodo-pago" style="display: block; margin-bottom: 0.5rem;">Método de Pago:</label>
          <select id="metodo-pago" style="width: 100%; padding: 0.6rem; border-radius: var(--radio-borde); border: 1px solid var(--color-fondo);">
            <option value="tarjeta">Tarjeta de Crédito / Débito</option>
            <option value="transferencia">Transferencia Bancaria</option>
          </select>
        </div>

        <button type="submit" class="boton-primario" style="margin-top: 1rem; padding: 0.8rem; font-size: 1rem; cursor: pointer;">
          Confirmar y Pagar
        </button>

      </form>
    </main>
  )
}

export default Checkout