var Data = require('../models/data')

module.exports = {
  create: function(req,res){
    var newData = new Data({
      letter: req.body.letter,
      frequency: req.body.frequency
    })

    newData.save(function(err){
      if(err){
        res.send(err)
      }
      else{
        res.json(newData)
      }
    })
  },
  show: function(req,res){
    Data.find({},function(err,result){
      if(err){
        res.send(err)
      }
      else{
        res.json(result)
      }
    })
  },
  showOne: function(req,res){
    Data.findOne({_id:req.params.id},function(err,result){
      if(err){
        res.send(err)
      }
      else{
        res.json(result)
      }
    })
  },
  delete: function(req,res){
    Data.findOneAndRemove({_id:req.params.id},function(err){
      if(err){
        res.send(err)
      }
      else{
        res.send('delete berhasil')
      }
    })
  },
  update: function(req,res){
    Data.findOne({_id:req.params.id},function(err,result){
      if(err){
        res.send(err)
      }
      else{
        result.letter = req.body.letter,
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
      Data.find({},function(err,result){
        if(err){
          res.send(err)
        }
        else{
          res.json(result)
        }
      })
    }
    else if(req.query.l==''){
      Data.find({frequency:req.query.f},function(err,result){
        if(err){
          res.send(err)
        }
        else{
          res.json(result)
        }
      })
    }
    else if(req.query.f==''){
      Data.find({letter:req.query.l},function(err,result){
        if(err){
          res.send(err)
        }
        else{
          res.json(result)
        }
      })
    }
    else{
      Data.find({$and:[{letter:req.query.l},{frequency:req.query.f}]},function(err,result){
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
