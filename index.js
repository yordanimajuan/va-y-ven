// index.js
const axios = require('axios');

const API_BASE = 'https://api-recaudo.transporteyucatan.org.mx/api-movil/pagos/tarjeta/';
const API_KEY = 'appService_A8UF7lYs9U7TmTzOV5UA8e2bNUD6w9WPVhdSxdgDve6eiLdWhcraV';

function looksLikeNumber(v) {
  if (v === null || v === undefined) return false;
  if (typeof v === 'number') return true;
  if (typeof v === 'string') return /^[\d.,]+$/.test(v.trim());
  return false;
}

function findBalance(obj) {
  if (typeof obj !== 'object' || obj === null) return null;
  const candidateKeys = ['saldo','balance','amount','available','disponible','monto','value','total'];

  for (const key of Object.keys(obj)) {
    const lower = key.toLowerCase();
    if (candidateKeys.includes(lower) && looksLikeNumber(obj[key])) {
      return obj[key];
    }
    for (const cand of candidateKeys) {
      if (lower.includes(cand) && looksLikeNumber(obj[key])) {
        return obj[key];
      }
    }
    if (typeof obj[key] === 'object') {
      const nested = findBalance(obj[key]);
      if (nested) return nested;
    }
  }
  return null;
}

/**
 * Consulta el saldo de una tarjeta Va y Ven
 * @param {string} tarjeta - Número de tarjeta (solo dígitos)
 * @returns {Promise<number|string|null>} Saldo encontrado o null si no se detecta
 */
async function consultarSaldo(tarjeta) {
  const url = API_BASE + encodeURIComponent(tarjeta);

  const headers = {
    'Accept': 'application/json, text/plain, */*',
    'Origin': 'https://checkout-recaudo.transporteyucatan.org.mx',
    'Referer': 'https://checkout-recaudo.transporteyucatan.org.mx/',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    'x-api-key': API_KEY
  };

  try {
    const resp = await axios.get(url, { headers, timeout: 15000 });
    const data = resp.data;

    if (typeof data === 'object') {
      return findBalance(data);
    }

    if (typeof data === 'string') {
      const m = data.match(/Saldo\s*disponible\s*:\s*\$?\s*([0-9\.,]+)/i);
      return m ? m[1] : null;
    }

    return null;
  } catch (err) {
    if (err.response) {
      throw new Error(`HTTP ${err.response.status}: ${JSON.stringify(err.response.data).slice(0,300)}`);
    }
    throw err;
  }
}

module.exports = { consultarSaldo };
