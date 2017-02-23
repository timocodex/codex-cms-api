var express = require('express');
var router = express.Router();
var user = require('../controllers/users.controller.js')
/* GET users listing. */
router.get('/',user.show);
router.post('/',user.create);


module.exports = router;
