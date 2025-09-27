const axios = require('axios');
const path = require('path');
const configPath = path.resolve(__dirname, '../config');
const { API_KEY, BASE_URL } = require(configPath);


async function validarTarjeta(numeroTarjeta) {
  const res = await axios.get(`${BASE_URL}/tarjeta/${numeroTarjeta}`, {
    headers: { 'x-api-key': API_KEY }
  });

  if (res.data.HasError) throw new Error(`Tarjeta inválida: ${res.data.Message}`);
  return res.data.Result;
}

async function consultarSaldoTarjeta(numeroTarjeta) {
  const tarjeta = await validarTarjeta(numeroTarjeta);
  return {
    numeroTarjeta: tarjeta.NumeroTarjeta,
    uIdMonedero: tarjeta.uIdMonedero,
    saldo: tarjeta.dSaldo,
    tipo: tarjeta.iTipoTarjeta,
    estatus: tarjeta.sEstatus
  };
}

module.exports = {
  validarTarjeta,
  consultarSaldoTarjeta
};
