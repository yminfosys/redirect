var express = require('express');
var router = express.Router();
const axios = require('axios');


router.get('/', async (req, res) => {
  try {
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    // Handle local testing
    if (ip === '::1' || ip === '127.0.0.1') {
      ip = '27.255.221.0'; // Example IP from India
    }

    const response = await axios.get(`https://ipapi.co/${ip}/json/`);
    const country = response.data.country_name;

    console.log(country)

    if (country === 'India') {
      return res.redirect('https://paacrypto.com');
    } else {
     //return res.redirect('https://paacryptobank.com');
     res.render('index', { country });
    }
  } catch (error) {
    console.error('Geo lookup failed:', error.message);
    return res.redirect('https://paacryptobank.com');
  }
});







module.exports = router;
