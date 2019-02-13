const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017", { useNewUrlParser: true }, (err, db) => {
    if (err) {
        return console.log("Unable to connect MongoDB server");
    }
    console.log("Connected to MongoDB server");

    var db = db.db("stockPile2");

    // Method to update a record:

    // db.collection('Foods').findOneAndUpdate(
    //     {_id: new ObjectID("5c5b8877d466a7de4200d260")},{ $set: {Frig: true}}, {
    //     returnOriginal: false 
    // }).then((result)=>{
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate(
        { _id: new ObjectID("5c5b8bf61b1119de9668e2db")},
        {$inc: {age: 8}},
        {returnOriginal: false}
    ).then((result)=>{
        console.log("The record was updated: " + JSON.stringify(result, undefined, 2));
    });



    // db.close;
});