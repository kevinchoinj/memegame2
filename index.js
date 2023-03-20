const express = require('express');
const path = require('path');
const compression = require('compression');
const bodyParser = require('body-parser');
const app = express();
const {router} = require ('./routes/index.js');
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use('/static', express.static('public'));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/client/build/index.html`));
});
const port = process.env.PORT || 5000;

app.listen(port, function(){
  console.log(`server is running on port ${port}`)
})

