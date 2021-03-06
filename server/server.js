const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectId} = require('mongodb');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const {authenticate} = require('./middlewear/authenticate');

var {mongoose} = require('./db/mongoose');
var {Food} = require('./models/food');
var {User} = require('./models/user');
var {Recipe} = require('./models/recipes')

const spoonacularController = require("./controllers/spoonacular")

var app = express();

// Set the JWT to x-auth with this the front end can access the token in the request.
const corsOptions = {
    exposedHeaders: ['x-auth'],
};

app.use(cors(corsOptions));


app.use(bodyParser.json({type: '*/*'}));

// Add Food to Stock "DB"
app.post("/stockpile/food", authenticate, (req, res) => {
  var food = new Food({
    name: req.body.name,
    type: req.body.type,
    frig: req.body.frig,
    count: req.body.count,
    _creator: req.user._id
  });
  food.save().then(
    doc => {
      res.send(doc);
    },
    e => {
      res.status(400).send(e);
    }
  );
});
// Get List of Stock:
app.get('/stockpile/foodlist', authenticate, (req,res)=>{
    Food.find({
        _creator: req.user._id
    }).then((foodList)=>{
      res.send({ foodList })
    }, (e)=>{
        res.status(400).send(e);
    });
});

// Get request with a query string in the URL
app.get("/stockpile/food/:id", authenticate, (req, res) => {
  var id = req.params.id;

  if (!ObjectId.isValid(id)) {
    return res.status(404).send();
  }
  Food.findOne({
    _id: id,
    _creator: req.user._id
  })
    .then(food => {
      if (food) {
        console.log("Found Food with ID: ", food);
        res.send({ food });
      } else {
        res.status(404).send();
        console.log("404: no Food Found");
      }
    })
    .catch(e => res.status(400).send());
});
// Route to  delete a food item:
app.delete("/stockpile/foodlist/:id", authenticate, (req, res) => {
  var id = req.params.id;
  console.log(id);
  if (!ObjectId.isValid(id)) {
    return res.status(404).send();
  }
  Food.findOneAndRemove({
    _id: id,
    _creator: req.user._id
  })
    .then(food => {
      if (food) {
        console.log("The food item was deleted");
        res.send({ food });
      } else {
        res.status(404).send();
        console.log("404: the food was not found");
      }
    })
    .catch(e => res.status(400).send());
});
// Update Food Item
app.patch("/stockpile/food/:id", authenticate, (req, res) => {
  var id = req.params.id;

  console.log(id);
  if (!ObjectId.isValid(id)) {
    return res.status(404).send();
  }

  Food.findOneAndUpdate(
    { _id: id, _creator: req.user._id },
    { $inc: { count: -1 } }
  )
    .then(food => {
      if (!food) {
        res.status(404).send();
      } else {
        console.log("Updated Count for the food");
        res.send({ food });
      }
    })
    .catch(e => res.status(400).send(e));;
});

// ======== HTTP Call to POST /User ===============

app.post('/user', (req, res)=> {
    var body = _.pick(req.body, ['name', 'email', 'password']);
    var user = new User(body);
    user.save().then(() => {
        return user.generateAuthToken();
    }).then((token) =>{
        res.header('x-auth', token).send(user);
        console.log(user);
    }).catch((e)=>{
        res.status(400).send(e);
    });
});

app.get('/user/me', authenticate, (req, res)=>{
    res.send(req.user);
});

app.post('/user/login', (req, res)=>{
    var body = _.pick(req.body, ['email', 'password']);

    User.findByCredentials(body.email, body.password)
      .then(user => {
        return user.generateAuthToken().then((token)=>{
            res.header('x-auth', token).send(user);
        });
      })
      .catch(e => {
        res.status(400).send();
      });
});

app.delete('/user/logout', authenticate, (req, res) =>{
    req.user.removerToken(req.token).then(()=>{
        res.status(200).send();
    }, ()=>{
        res.status(400).send();
    });
});

// RECIPE LOOKUP:
app.post('/spoon/recipeLookup', authenticate, spoonacularController.getRecipes);

// Add Recipe to favorites:
app.post("/stockpile/addrecipe", authenticate, (req, res) => {
  var recipe = new Recipe({
    name: req.body.name,
    recipeID: req.body.recipeID,
    recipeImage: req.body.recipeImage,
    recipeURL: req.body.recipeURL,
    _creator: req.user._id
  });
  recipe.save().then(
    doc => {
      res.send(doc);
    },
    e => {
      res.status(400).send(e);
    }
  );
});

// Get favorite Recipe List:
app.get('/stockpile/favoriterecipes', authenticate, (req,res)=>{
    Recipe.find({
        _creator: req.user._id
    }).then((favoriteRecipesList)=>{
      res.send({ favoriteRecipesList })
    }, (e)=>{
        res.status(400).send(e);
    });
});


// Route to  delete Recipe from Favorites:
app.delete("/stockpile/favoriterecipes/:id", authenticate, (req, res) => {
  var id = req.params.id;
  console.log(id);
  if (!ObjectId.isValid(id)) {
    return res.status(404).send();
  }
  Recipe.findOneAndRemove({
    _id: id,
    _creator: req.user._id
  })
    .then(recipe => {
      if (recipe) {
        console.log("The Recipe was removed from your favorites");
        res.send({ recipe });
      } else {
        res.status(404).send();
        console.log("404: The Recipe was not found");
      }
    })
    .catch(e => res.status(400).send());
});


// Server Setup:
 if(process.env.NODE_ENV === 'production'){
   // Express will server prioduction assets 
   app.use(express.static('client/stockpile2/build'))

   const path = require('path');
   app.get('*', (req,res)=>{
     res.sendFile(path.resolve(__dirman, 'client/stockpile2', 'build', 'index.html'));
   });
 }

const PORT = process.env.PORT || 3090;

console.log('Version: ' + process.version)


app.listen(PORT, () =>{
    console.log("Started on Port 3090");
});
