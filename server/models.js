const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/quote_ranks_demo', {useNewUrlParser:true}, errs=>errs?console.log(errs):console.log('db is good to go'));
const QuoteSchema = new mongoose.Schema({
    content:{
        required:true,
        type:String,
        minlength:[3,"please say things that are profound enough to need more than 2 characters"]
    },
    votes:{
        type:Number,
        default:0
    }
}, {timestamps:true})
const AuthorSchema = new mongoose.Schema({
    name:{
        required:true,
        type:String,
        minlength:[3,"length of your name better be 3 or else..."]
    },
    quotes:[QuoteSchema]
},{timestamps:true})

module.exports = mongoose.model("Author",AuthorSchema);