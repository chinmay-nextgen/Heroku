var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var exerciseSchema=new Schema({

  username:{type:String, required:true},
  description:{type:String, required:true},
  duration: { type: Number, required: true },
  date: { type: Date, required: true }
},    {timestamp:true});

var ExerciseModel=mongoose.model('Exercise',exerciseSchema);
module.exports=ExerciseModel;
