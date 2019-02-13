const axios = require('axios');

const apiKey = "";


const getRecipes = ()=>{
        axios.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients",
            {
              headers: {'X-RapidAPI-Key': apiKey},
              params: {ingredients: "Apple,Flour,Sugar"}
            }
        )
          .then((res) => {
            console.log("Response:", JSON.stringify(res.data, undefined,2));
          })
          .catch((e) => {
            console.log("Error");
          }) 
};

getRecipes();