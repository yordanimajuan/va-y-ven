Un módulo en Node.js para interactuar con la API de recargas del sistema de transporte Va y Ven (Yucatán).
Permite validar tarjetas, consultar saldo, obtener paquetes de recarga y generar links de pago usando Mercado Pago.

Instalación
git clone https://github.com/yordanimajuan/va-y-ven.git
cd va-y-ven
npm install



Uso

Ejemplo básico 

// Importa el módulo
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
})();


Estructura del Proyecto
va-y-ven/
├── config/               # Configuración (API Key, Base URL)
│   └── index.js
├── src/
│   ├── paquetes.js       # Manejo de paquetes
│   ├── tarjetas.js       # Validación y saldo de tarjetas
│   ├── ordenes.js        # Creación de órdenes
├── index.js              # Punto de entrada
├── example.js            # Ejemplo de uso
├── package.json
└── README.md

Funciones Disponibles

validarTarjeta(numeroTarjeta)

consultarSaldoTarjeta(numeroTarjeta)

obtenerPaquetes()

crearOrdenConPaquete(tarjeta, paquete)

generarLinkPago(orden)

flujoCompletoConPaquete(numeroTarjeta, paquete)

Licencia

Este proyecto está bajo la licencia MIT.
Puedes usarlo libremente, pero recuerda que depende de la API oficial de Va y Ven.

Nota

Este proyecto es no oficial y fue creado con fines de integración personal.
No está afiliado con el Gobierno del Estado de Yucatán ni con Va y Ven.