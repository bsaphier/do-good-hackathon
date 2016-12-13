const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.send('Do-Good');
});

router.post('/', (req, res, next) => {
  res.send('Do-Good');
});

module.exports = router;
