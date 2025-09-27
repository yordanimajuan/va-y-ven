const tarjetas = require('./src/tarjetas');
const ordenes = require('./src/ordenes');
const paquetes = require('./src/paquetes');

module.exports = {
  ...tarjetas,
  ...ordenes,
  ...paquetes
};
