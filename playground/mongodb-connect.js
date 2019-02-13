// const MongoClient = require('mongodb').MongoClient;


const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect( "mongodb://localhost:27017", { useNewUrlParser: true }, (err, db) => {
    if (err) {
      return console.log("Unable to connect MongoDB server");
    }
    console.log("Connected to MongoDB server");
    
    var db = db.db("stockPile2");
    
    // db.collection('Foods').insertOne({
    //      text: "Some Food Added",
    //      completed:false
    // }, (err,results) =>{
    //     if(err){
    //         return console.log("Error unable to insert food", err);
    //     }
    //     console.log("Success, Added Food to Collection", JSON.stringify(results.ops, undefined, 2))
    // });


    // db.collection("Foods").insertOne(
    //   {
    //     name: "Kale",
    //     type: "Vegetable",
    //     date: new Date().toDateString(),
    //     Frig: true
    //   },
    //   (err, results) => {
    //     if (err) {
    //       return console.log("Error: was not able to add food", err);
    //     }
    //     console.log(
    //       "Success, added food to Collection",
    //       JSON.stringify(results.ops, undefined, 2)
    //     );
    //   }
    // );


    db.collection("Users").insertOne(
        {
            name: "Josue",
            age: "20",
            date_SignUp: new Date().toDateString(),
            city: "Jersey City",
            email: "josueguzman89@gmail.com"
        },
        (err, results) => {
            if (err) {
                return console.log("Error: was not able to add food", err);
            }
            console.log(
                "Success, added food to Collection",
                JSON.stringify(results.ops, undefined, 2)
            );
        }
    );



    

    

    db.close;
  }
);