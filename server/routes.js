const bp = require('body-parser');
const api = require('./controller');
module.exports = function(app){
    app.use(bp.json());
    app.get('/api/authors', api.allAuthors);
    app.get('/api/authors/:author_id', api.oneAuthor);
    app.post('/api/authors',api.createAuthor);
    app.patch('/api/authors/:author_id', api.updateAuthor);
    app.delete('/api/authors/:author_id', api.deleteAuthor);
    app.post('/api/quotes', api.createQuote);
    app.delete('/api/quotes/:quote_id', api.deleteQuote);
    app.patch('/api/quotes/:quote_id', api.updateQuote);
    return app
}