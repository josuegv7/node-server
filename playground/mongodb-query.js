const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017", { useNewUrlParser: true }, (err, db) => {
    if (err) {
        return console.log("Unable to connect MongoDB server");
    }
    console.log("Connected to MongoDB server");

    var db = db.db("stockPile2");

    db.collection('Foods').find().toArray().then((docs)=>{
        console.log("Foods")
        console.log(JSON.stringify(docs, undefined, 2));
    },(err)=>{
        console.log('Unable to fetch data', err)
    });




    // db.close;
});