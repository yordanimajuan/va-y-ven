<body>

<header>
  <h1>Va y Ven - Módulo Node.js</h1>
  <p>Integración con la API de recargas del sistema de transporte Va y Ven (Yucatán)</p>
  <a href="https://github.com/yordanimajuan/va-y-ven" class="button" target="_blank">Ver en GitHub</a>
</header>

<main>
  <section>
    <h2>Descripción</h2>
    <p>Este módulo permite interactuar con la API de Va y Ven para:</p>
    <ul>
      <li>Validar tarjetas</li>
      <li>Consultar saldo</li>
      <li>Obtener paquetes de recarga</li>
      <li>Generar links de pago usando Mercado Pago</li>
    </ul>
  </section>

  <section>
    <h2>Instalación</h2>
    <pre><code>git clone https://github.com/yordanimajuan/va-y-ven.git
cd va-y-ven
npm install</code></pre>
  </section>
    <section>
    <h2>Instalación desde NPM</h2>
    <pre><code>
npm install va-y-ven</code></pre>
  </section>

  <section>
    <h2>Uso</h2>
    <h3>Ejemplo básico</h3>
    <pre><code>// Importa el módulo
const vaYVen = require('va-y-ven');

(async () => {
  try {
    // Consultar saldo de una tarjeta
    const tarjeta = await vaYVen.consultarSaldoTarjeta("5000000000535616");
    console.log("✅ Tarjeta:", tarjeta);

    // Obtener paquetes disponibles
    const paquetes = await vaYVen.obtenerPaquetes();
    console.log("📦 Paquetes disponibles:", paquetes);

    // Crear una orden con un paquete (por ejemplo el primero)
    const orden = await vaYVen.crearOrdenConPaquete(tarjeta, paquetes[0]);

    // Generar link de pago
    const linkPago = vaYVen.generarLinkPago(orden);
    console.log("💳 Link de pago:", linkPago);

  } catch (err) {
    console.error("❌ Error:", err.message);
  }
})();</code></pre>
  </section>
</main>

</body>