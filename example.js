const vaYVen = require('./index');

(async () => {
  const tarjeta = await vaYVen.consultarSaldoTarjeta('5000000000535616');
  const paquetes = vaYVen.obtenerPaquetes();
  const paquete = vaYVen.obtenerPaquetePorId('29075b9a-39de-415a-bad5-183d4732a88b');

  const resultado = await vaYVen.flujoCompletoConPaquete(tarjeta, paquete);
  console.log('Link de pago:', resultado.linkPago);
})();
