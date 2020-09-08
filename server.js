const path = require('path');
const express = require('express');
const app = express();

app.use (function (req, res, next) {
  if (req.secure) {
          // request was via https, so do no special handling
          next();
  } else {
          // request was via http, so redirect to https
          res.redirect('https://' + req.headers.host + req.url);
  }
});

// Serve static files
app.use(express.static(__dirname + '/dist/minemark'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/minemark/index.html'));
});

// app.get('*', function(req, res) {
//   res.redirect('https://' + req.headers.host + req.url);

// default Heroku port
app.listen(process.env.PORT || 5000);
