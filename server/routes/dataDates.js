var express = require('express');
var router = express.Router();
var Ddates = require('../controllers/dataDates.controller.js')
/* GET users listing. */
router.get('/',Ddates.show);
router.post('/',Ddates.create);


module.exports = router;
