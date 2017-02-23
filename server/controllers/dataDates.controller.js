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
  },
  showOne: function(req,res){
    Ddates.findOne({_id:req.params.id},function(err,result){
      if(err){
        res.send(err)
      }
      else{
        res.json(result)
      }
    })
  },
  delete: function(req,res){
    Ddates.findOneAndRemove({_id:req.params.id},function(err){
      if(err){
        res.send(err)
      }
      else{
        res.send('delete berhasil')
      }
    })
  },
  update: function(req,res){
    Ddates.findOne({_id:req.params.id},function(err,result){
      if(err){
        res.send(err)
      }
      else{
        result.Ddatesdate = req.body.Ddatesdate,
        result.frequency = req.body.frequency

        result.save(function(err){
          if(err){
            res.send(err)
          }
          else{
            res.json(result)
          }
        })
      }
    })
  },
  search: function(req,res){
    if(req.query.l=='' && req.query.f==''){
      Ddates.find({},function(err,result){
        if(err){
          res.send(err)
        }
        else{
          res.json(result)
        }
      })
    }
    else if(req.query.l==''){
      Ddates.find({frequency:req.query.f},function(err,result){
        if(err){
          res.send(err)
        }
        else{
          res.json(result)
        }
      })
    }
    else if(req.query.f==''){
      Ddates.find({datadate:req.query.l},function(err,result){
        if(err){
          res.send(err)
        }
        else{
          res.json(result)
        }
      })
    }
    else{
      Ddates.find({$and:[{datadate:req.query.l},{frequency:req.query.f}]},function(err,result){
        if(err){
          res.send(err)
        }
        else{
          res.json(result)
        }
      })
    }
  }
}
