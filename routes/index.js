var express = require('express');
var router = express.Router();
const axios = require('axios');


router.get('/', async (req, res) => {
  res.render('index', { title:"Paacryptobank" });
});


router.get('/check-location', (req, res) => {
  const { lat, lon } = req.query;
  const latitude = parseFloat(lat);
  const longitude = parseFloat(lon);

  let redirect;

  // Simple bounding boxes (roughly)
  if (latitude >= 6 && latitude <= 36 && longitude >= 68 && longitude <= 97) {
    redirect = 'https://paacrypto.com'; // India
   // redirect = '/uk';
  } else if (latitude >= 20 && latitude <= 27 && longitude >= 88 && longitude <= 92) {
    redirect = '/uk';
  } else {
    redirect = '/uk';
  }

  res.json({ redirect });
});

router.get('/uk', async (req, res) => {
  res.render('home', { title:"Paacryptobank" });
});





module.exports = router;
