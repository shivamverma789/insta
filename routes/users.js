const mongoose =require('mongoose');
require('dotenv').config()
const plm =require("passport-local-mongoose");

mongoose.connect(process.env.MONGO_URL).then(() => console.log("Connected to database"));

const userSchema =mongoose.Schema({
  username: String,
  name:String,
  email:String,
  password:String,
  bio:String,
  profileImage:String,
  posts: [{type: mongoose.Schema.Types.ObjectId, ref: "post"}],

});


userSchema.plugin(plm)

module.exports =mongoose.model("user", userSchema);
 