import axios from 'axios';

const API_KEY = 'cdfc08b3296f0164149119b33e9bcc21';
const BASE_URL = `https://api.themoviedb.org/3`;

export async function getTranding() {
  const { data } = await axios.get(
    `${BASE_URL}/trending/all/day?api_key=${API_KEY}`
  );
  return data;
}
