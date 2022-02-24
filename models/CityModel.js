const mongoose = require('mongoose');

const citySchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please Enter City Name"],
    }
})
module.exports = mongoose.model("City", citySchema);