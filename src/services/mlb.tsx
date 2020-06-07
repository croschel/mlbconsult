import axios from 'axios';

const mlb = axios.create({
  baseURL: "https://api.mercadolibre.com/"
})

export default mlb;