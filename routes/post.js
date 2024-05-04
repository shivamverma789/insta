const mongoose =require('mongoose');
require('dotenv').config()



// mongoose.connect(process.env.MONGO_URL);

const postSchema =mongoose.Schema({
  picture: String,
  caption: String,
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  Date: {
    type:Date,
    default: Date.now
  },
  likes:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref: "user",
    }
  ]


});



module.exports =mongoose.model("post", postSchema);
 