const axios = require('axios');
const apiKey = "dS6FP3ZAR1msh1hzkPHYQEJxLoinp1LioKIjsnQOM1tx25D89L";

const Yummly_API_Key = "41e42a842e2274fc2bf2afd489100120"
const Yummly_APP_ID = "f00d3c08"


// module.exports ={
//   getRecipes(req, res){
//     let foodList = req.body;
//     let ingredientsString = foodList.toString();
//     console.log("Controller Req Body", ingredientsString)
//     axios.get(
//         "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients",
//         {
//           headers: { "X-RapidAPI-Key": apiKey },
//           params: { ingredients: ingredientsString }
//         }
//       )
//       .then(apiResponse => {
//         //response.send();
//         console.log(apiResponse)
//         //console.log("Response:", JSON.stringify(apiResponse, undefined, 2));
//         res.send(apiResponse.data)
//       })
//       .catch(e => {
//         console.log("Error", e);
//         res.status(400).send(e)
//       });
//   }
// }

module.exports ={
  getRecipes(req, res){
    let foodList = req.body;
    let ingredientsString = foodList.toString();
    console.log("Controller Req Body", ingredientsString)
    axios.get(
      `http://api.yummly.com/v1/api/recipes?_app_id=${Yummly_APP_ID}&_app_key=${Yummly_API_Key}&q=${ingredientsString}&maxResult=3&start=0&requirePictures=true`
    )
    .then(apiResponse => {
      //console.log(apiResponse.data)
      res.send(apiResponse.data)
    })
    .catch(e => {
      console.log("Error with the API Response: ", e);
      res.status(400).send(e)
    });
}
}

//getRecipes();
