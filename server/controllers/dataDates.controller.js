var Ddates = require('../models/dataDate')

module.exports = {
  create: function(req,res){
    var newDates = new Ddates({
      datadate: req.body.datadate,
      frequency: req.body.frequency
    })

    newDates.save(function(err){
      if(err){
        res.send(err)
      }
      else{
        res.json(newDates)
      }
    })
  },
  show: function(req,res){
    Ddates.find({},function(err,result){
      if(err){
        res.send(err)
      }
      else{
        res.json(result)
      }
    })
  }
}
