var express = require('express');
var router = express.Router();
var Data = require('../controllers/datas.controller.js')
/* GET users listing. */
router.get('/search',Data.search)
router.get('/:id',Data.showOne);
router.get('/',Data.show);
router.post('/',Data.create);
router.delete('/:id',Data.delete)
router.put('/:id',Data.update)


module.exports = router;
