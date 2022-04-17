const mongoose = require("mongoose");

const flatSchema = new mongoose.Schema({
    imageUrl : {type : String},
    block : {type : String, required : true},
    flatNo : {type : Number , required : true}, 
    type : {type : String, required : true, default : "tenant"},
  },
  {
    versionKey: false,
  }
);

module.exports =  mongoose.model("flat", flatSchema);