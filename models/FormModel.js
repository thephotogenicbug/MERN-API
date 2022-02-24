const mongoose = require("mongoose");
const validator = require("validator");

const formSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
  },
  email:{
      type:String,
      required:[true, "Please Enter your Email id"],
      unique:true,
      validate:[validator.isEmail, "Please Enter a valid Email id"]
  },
  mobile:{
      type:Number,
      required:[true, "Please Enter your Mobile No."],
  },
  message:{
      type:String,
      required:[true, "Please Enter Your Message"]
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Form", formSchema);
