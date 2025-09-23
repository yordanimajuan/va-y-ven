// ejemplo.js
const { consultarSaldo } = require('./va-y-ven');

(async () => {
  try {
    const tarjeta = '5000000000534053';
    const saldo = await consultarSaldo(tarjeta);
    console.log(`Saldo tarjeta ${tarjeta}: ${saldo !== null ? saldo : 'No detectado'}`);
  } catch (err) {
    console.error('Error consultando saldo:', err.message);
  }
})();
