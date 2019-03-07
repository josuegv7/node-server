const {ObjectID} = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const {Food} = require('./../server/models/food');

if (!ObjectID.isValid){
    console.log("Id not valide");
}


let id = '5c5ba52bafe1f6e219d1fa91222';

// Food.find({
//     _id: id
// }).then((foods) =>{
//     console.log('Foods', foods);
// });

// Food.findOne({
//     _id: id
// }).then((food)=>{
//     console.log('Food', food);
// });

Food.findById(id).then((food)=>{
    if (!food){
        return console.log("Id not Found");
    }
    console.log("Find by ID", food);
}).catch((e) => console.log(JSON.stringify(e, undefined, 2));  