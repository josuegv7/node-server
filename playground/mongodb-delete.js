const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017", { useNewUrlParser: true }, (err, db) => {
    if (err) {
        return console.log("Unable to connect MongoDB server");
    }
    console.log("Connected to MongoDB server");

    var db = db.db("stockPile2");

 //delete Many
    // db.collection('Foods').deleteMany({name:'Pollo'}).then((result)=>{
    //     console.log("Item Deleted: " + result);
    // });

 //DeleteOne: delete the first item that meets the criteria then stops
//  db.collection('Foods').deleteOne({name: 'Pork'}).then((result)=>{
//      console.log("One Item Deleted:" + result);
//  });

 //findoneandDelete
    db.collection('Foods').findOneAndDelete({ _id: new ObjectID("5c5b83900f6d9b4c48dfcf52")}).then((result)=>{
    console.log("This was deleted: " + JSON.stringify(result,undefined, 2));
});

    // db.close;
});