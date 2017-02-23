var express = require('express');
var router = express.Router();
var Ddates = require('../controllers/dataDates.controller.js')
/* GET users listing. */
router.get('/search',Ddates.search)
router.get('/:id',Ddates.showOne);
router.get('/',Ddates.show);
router.post('/',Ddates.create);
router.delete('/:id',Ddates.delete);
router.put('/:id',Ddates.update)

module.exports = router;
