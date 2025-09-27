const axios = require('axios');
const path = require('path');
const configPath = path.resolve(__dirname, '../config');
const { API_KEY, BASE_URL } = require(configPath);


async function crearOrdenConPaquete(tarjetaData, paquete) {
  const payload = {
    OpcionPago: 2,
    IdUsuario: '00000000-0000-0000-0000-000000000000',
    Monto: paquete.precio,
    Concepto: paquete.nombre,
    IdMonedero: tarjetaData.uIdMonedero,
    IdPaquete: paquete.id,
    Origen: 3
  };

  const res = await axios.post(`${BASE_URL}/ordenes/web`, payload, { headers: { 'x-api-key': API_KEY } });
  return res.data.Result;
}

function generarLinkPago(orden) {
  if (!orden || !orden.OrdenRef) throw new Error('Orden inválida');
  return `https://www.mercadopago.com.mx/checkout/v1/payment/redirect/?preference-id=${orden.OrdenRef}`;
}

async function flujoCompletoConPaquete(tarjetaData, paquete) {
  const orden = await crearOrdenConPaquete(tarjetaData, paquete);
  const linkPago = generarLinkPago(orden);
  return { orden, linkPago };
}

module.exports = {
  crearOrdenConPaquete,
  generarLinkPago,
  flujoCompletoConPaquete
};
