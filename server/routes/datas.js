var express = require('express');
var router = express.Router();
var Data = require('../controllers/datas.controller.js')
/* GET users listing. */
router.get('/',Data.show);
router.post('/',Data.create);


module.exports = router;
