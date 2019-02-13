const {ObjectId} = require('mongodb');


const { mongoose } = require('./../server/db/mongoose');
const { Food } = require('./../server/models/food');



// Food.remove({}).then(()=>{
//     console.log(result);
// });

Food.findByIdAndRemove("5c5b9981293e8de03091129c").then(food => {
  console.log(food);
});