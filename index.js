import axios from 'axios';
import cheerio from 'cheerio';

const domElement = axios
  .get('https://memegen-link-examples-upleveled.netlify.app/')
  .then(({ data }) => data);

console.log(await domElement);

const getIMG = await domElement;

const getWebsiteLinks = async (url) => {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    $('div.bookContainer').each(function (i, elem) {
      let link = $(elem).find('a').attr('href');
      linkList.push(url + link);
    });
  } catch (error) {
    console.error(error);
  }
};

//how to call function
//change div.bookContainer to right  css selector
