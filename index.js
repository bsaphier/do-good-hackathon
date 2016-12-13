const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const app = express();

// ** this will work for heroku ** //
app.set('port', (process.env.PORT || 1337));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '/public')))

app.use('/api', require('./routes'));

var validFrontendRoutes = ['/', '/posts'];
var indexPath = '/Users/hannahcain/Desktop/do-good-hackathon/browser/index.html';
validFrontendRoutes.forEach(function (stateRoute) {
  app.get(stateRoute, function (req, res) {
    res.sendFile(indexPath);
  });
})


// ***** Catch any request not handled in routes ***** //
app.use(function (req, res, next) {
  const err = new Error('errororororor');
  err.status = 404;
  next(err);
});

// ***** Error handling ***** //
app.use(function (err, req, res, next) {
  console.error(err, err.stack);
  let stat = (err.status || 500)
  res.status(stat);
  res.json({
    error: err
  });
});

// ** should probably change this post development ** //
app.listen(app.get('port'), function () {
  console.log(`Ooooooh, port #${app.get('port')} is listening`);
});

module.exports = app;
