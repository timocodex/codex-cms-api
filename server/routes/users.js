var express = require('express');
var router = express.Router();
var user = require('../controllers/users.controller.js')
var passport = require('passport')
/* GET users listing. */
router.post('/',user.create);
router.get('/',user.show);
router.post('/login',passport.authenticate('login'),user.afterLogin)



module.exports = router;
