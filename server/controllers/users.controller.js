var User = require('../models/user')
var passwordHash = require('password-hash')

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
  }
}
