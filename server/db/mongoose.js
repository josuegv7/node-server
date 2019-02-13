var mongoose = require('mongoose');



mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/StockPile2", { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Connected to DB");
});

module.exports= {mongoose}