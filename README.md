<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Va y Ven - Módulo Node.js</title>
  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
  <!-- Prism.js for syntax highlighting -->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.30.0/themes/prism-tomorrow.min.css" rel="stylesheet" />
  <style>
    body {
      font-family: 'Inter', sans-serif;
      background-color: #f7f9fc;
      color: #1a202c;
      margin: 0;
    }
    header {
      background-color: #2b6cb0;
      color: white;
      padding: 2rem 1rem;
      text-align: center;
    }
    header h1 {
      margin: 0;
      font-size: 2rem;
    }
    header p {
      margin-top: 0.5rem;
      font-size: 1.1rem;
    }
    main {
      max-width: 900px;
      margin: 2rem auto;
      padding: 1rem 2rem;
      background-color: white;
      border-radius: 10px;
      box-shadow: 0 6px 20px rgba(0,0,0,0.08);
    }
    section {
      margin-bottom: 2rem;
    }
    h2 {
      color: #2b6cb0;
      border-bottom: 2px solid #2b6cb0;
      padding-bottom: 0.3rem;
      margin-bottom: 1rem;
    }
    h3 {
      color: #2b6cb0;
      margin-top: 1rem;
    }
    p {
      line-height: 1.6;
    }
    ul {
      padding-left: 1.5rem;
    }
    pre {
      border-radius: 8px;
      padding: 1rem;
      overflow-x: auto;
    }
    a.button {
      display: inline-block;
      background-color: #2b6cb0;
      color: white;
      padding: 0.5rem 1rem;
      margin: 0.5rem 0;
      border-radius: 5px;
      text-decoration: none;
      font-weight: 600;
      transition: background-color 0.3s;
    }
    a.button:hover {
      background-color: #1a4a8b;
    }
    footer {
      text-align: center;
      font-size: 0.9rem;
      color: #555;
      padding: 1rem;
    }
  </style>
</head>
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
    <pre><code class="language-bash">git clone https://github.com/yordanimajuan/va-y-ven.git
cd va-y-ven
npm install</code></pre>
  </section>

  <section>
    <h2>Uso</h2>
    <h3>Ejemplo básico</h3>
    <pre><code class="language-javascript">// Importa el módulo
const vaYVen = require('va-y-ven');

(async () => {
  try {
    // 1️⃣ Consultar saldo de una tarjeta
    const tarjeta = await vaYVen.consultarSaldoTarjeta("5000000000535616");
    console.log("✅ Tarjeta:", tarjeta);

    // 2️⃣ Obtener paquetes disponibles
    const paquetes = await vaYVen.obtenerPaquetes();
    console.log("📦 Paquetes disponibles:", paquetes);

    // 3️⃣ Crear una orden con un paquete (por ejemplo el primero)
    const orden = await vaYVen.crearOrdenConPaquete(tarjeta, paquetes[0]);

    // 4️⃣ Generar link de pago
    const linkPago = vaYVen.generarLinkPago(orden);
    console.log("💳 Link de pago:", linkPago);

  } catch (err) {
    console.error("❌ Error:", err.message);
  }
})();</code></pre>
  </section>

  <section>
    <h2>Estructura del Proyecto</h2>
    <pre><code class="language-bash">va-y-ven/
├── config/               # Configuración (API Key, Base URL)
│   └── index.js
├── src/
│   ├── paquetes.js       # Manejo de paquetes
│   ├── tarjetas.js       # Validación y saldo de tarjetas
│   ├── ordenes.js        # Creación de órdenes
├── index.js              # Punto de entrada
├── example.js            # Ejemplo de uso
├── package.json
└── README.md</code></pre>
  </section>

  <section>
    <h2>Funciones Disponibles</h2>
    <ul>
      <li>validarTarjeta(numeroTarjeta)</li>
      <li>consultarSaldoTarjeta(numeroTarjeta)</li>
      <li>obtenerPaquetes()</li>
      <li>crearOrdenConPaquete(tarjeta, paquete)</li>
      <li>generarLinkPago(orden)</li>
      <li>flujoCompletoConPaquete(numeroTarjeta, paquete)</li>
    </ul>
  </section>

  <section>
    <h2>Licencia</h2>
    <p>Este proyecto está bajo la licencia <strong>MIT</strong>. Puedes usarlo libremente, pero depende de la API oficial de Va y Ven.</p>
  </section>

  <section>
    <h2>Nota</h2>
    <p>Este proyecto es <strong>no oficial</strong> y fue creado con fines de integración personal. No está afiliado con el Gobierno del Estado de Yucatán ni con Va y Ven.</p>
  </section>
</main>

<footer>
  &copy; 2025 Yordani Majuan Suarez
</footer>

<!-- Prism.js -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.30.0/prism.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.30.0/components/prism-javascript.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.30.0/components/prism-bash.min.js"></script>
</body>
</html>
