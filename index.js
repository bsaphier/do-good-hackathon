const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// ** this will work for heroku ** //
app.set('port', (process.env.PORT || 1337));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', require('./routes'));

// ***** Catch any request not handled in routes ***** //
app.use(function (req, res, next) {
  const err = new Error('errororororor');
  err.status = 404;
  next(err);
});

// ***** Error handling ***** //
app.use(function (err, req, res, next) {
  console.error(err, err.stack);
  res.status(err.status || 500);
  res.render('error', {
    error: err
  });
});

// ** should probably change this post development ** //
app.listen(app.get('port'), function () {
  console.log(`Ooooooh, port #${app.get('port')} is listening`);
});

module.exports = app;
