const Author = require('./models')
module.exports = {
    allAuthors:(req,res)=>{
        Author.find({})
            .then(data=>console.log(data)||res.json(data))
            .catch(errs=>console.log(errs)||res.json(errs))
    },
    createAuthor:(req,res)=>{
        Author.create(req.body)
            .then(data=>console.log(data)||res.json(data))
            .catch(errs=>console.log(errs)||res.json(errs))
    },
    oneAuthor:(req,res)=>{
        Author.findById(req.params.author_id)
            .then(data=>console.log(data)||res.json(data))
            .catch(errs=>console.log(errs)||res.json(errs))
    },
    updateAuthor:(req,res)=>{
        console.log('working here?')
        Author.findByIdAndUpdate(req.params.author_id, req.body,{new:true})
            .then(data=>console.log(data)||res.json(data))
            .catch(errs=>console.log(errs)||res.json(errs))
    },
    deleteAuthor:(req,res)=>{
        Author.findByIdAndDelete(req.params.author_id)
            .then(data=>console.log(data)||res.json(data))
            .catch(errs=>console.log(errs)||res.json(errs))
    },
    createQuote:(req,res)=>{
        Author.findOneAndUpdate({_id:req.body.author_id}, {
            $push:{quotes:req.body}}, {runValidators:true, new:true})
            .then(data=>console.log(data)||res.json(data))
            .catch(errs=>console.log(errs)||res.json(errs))
    },
    deleteQuote:(req,res)=>{
        Author.findOneAndUpdate({"quotes._id":req.params.quote_id},{
            $pull:{"quotes":{"_id":req.params.quote_id}}
        }, {new:true})
            .then(data=>console.log(data)||res.json(data))
            .catch(errs=>console.log(errs)||res.json(errs))
    },
    updateQuote:(req,res)=>{
        Author.findOneAndUpdate({"quotes._id":req.params.quote_id},{
            $inc:{"quotes.$.votes":req.body.votes}
        }, {new:true})
            .then(data=>console.log(data)||res.json(data))
            .catch(errs=>console.log(errs)||res.json(errs))
    }
}