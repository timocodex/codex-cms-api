var User = require('../models/user')
var passwordHash = require('password-hash')
var jwt = require('jsonwebtoken')

module.exports = {
  create: function(req,res){
      var newUser = new User({
        username: req.body.username,
        password: passwordHash.generate(req.body.password)
      })
      newUser.save(function(err){
        if(err){
          res.send(err)
        }
        else{
          res.json(newUser)
        }
      })
    },
  show:function(req,res){
    User.find({},function(err,result){
      if(err){
        res.send(err)
      }
      else{
        res.json(result)
      }
    })
  },
  afterLogin: function(req,res){
    var token = jwt.sign({username:req.body.username},'key')
    res.send({token:token})
  },
  verify:function(req,res){
    
  }
}
