var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var userSchema=new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  }},{timestamp:true});
  var User=mongoose.model('User',userSchema);// User is the name of model
  module.exports=User;
