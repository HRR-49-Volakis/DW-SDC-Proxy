require('newrelic');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const router = require('./router');
const cors = require('cors');
const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const app = express();


app.use(cors());
app.use(morgan('dev'));
app.use(express.static(PUBLIC_DIR));

// Handling asset requests for webpack bundles by passing off requests to the bundles router
app.use('/bundles', router.bundles);
// Handling AJAX requests to the API by passing off requests to the api router
app.use('/api', router.api);

//loader.io
app.get('/loaderio-f01873741422f8a8189ef98606fb6f9a', (req,res) => {
  console.log(req);
  res.status(200).send('loaderio-f01873741422f8a8189ef98606fb6f9a');
});
app.get('/:item_id', (req, res) => {
  res.sendFile(`${PUBLIC_DIR}/index.html`);
});
module.exports = app;
