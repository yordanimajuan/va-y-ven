// Paquetes guardados con IDs y precios
const paquetesMap = {
    "29075b9a-39de-415a-bad5-183d4732a88b": { id: "29075b9a-39de-415a-bad5-183d4732a88b", nombre: "Recarga de 20", descripcion: "Recarga", precio: 20 },
    "5cc64e55-c5e8-4388-9954-107fd33ff3df": { id: "5cc64e55-c5e8-4388-9954-107fd33ff3df", nombre: "Recarga de 50", descripcion: "Recarga", precio: 50 },
    "d807ccc0-be92-42a8-9e6b-5d23103c8278": { id: "d807ccc0-be92-42a8-9e6b-5d23103c8278", nombre: "Recarga de 100", descripcion: "Recarga", precio: 100 },
    "541c0fde-77f6-4935-acc9-3a672b7244d8": { id: "541c0fde-77f6-4935-acc9-3a672b7244d8", nombre: "Recarga de 200", descripcion: "Recarga", precio: 200 },
    "ad70c9d9-3812-409a-a5ac-db6df4b7dc1e": { id: "ad70c9d9-3812-409a-a5ac-db6df4b7dc1e", nombre: "Recarga de 500", descripcion: "Recarga", precio: 500 }
  };
  
  function obtenerPaquetes() {
    return Object.values(paquetesMap);
  }
  
  function obtenerPaquetePorId(id) {
    return paquetesMap[id] || null;
  }
  
  function obtenerPrecioPorId(id) {
    return paquetesMap[id] ? paquetesMap[id].precio : null;
  }
  
  module.exports = {
    paquetesMap,
    obtenerPaquetes,
    obtenerPaquetePorId,
    obtenerPrecioPorId
  };
  