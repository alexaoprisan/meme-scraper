// console.log('Hallo');

import axios from 'axios';
import { load } from 'cheerio';

axios
  .get('https://memegen-link-examples-upleveled.netlify.app/')
  .then(({ data }) => console.log(data));
