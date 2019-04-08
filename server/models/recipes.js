var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Schemas:
var favRecipesSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    recipeID: { type: String, required: true, trim: true },
    recipeImage: { type: String, required: true, trim: true },
    recipeURL: { type: String, required: true, trim: true },
    _creator: {
      type: mongoose.Schema.Types.ObjectId,
      require: true
    }
  },
  { timestamps: { createdAt: "created_at" } }
);

// Model
var Recipe = mongoose.model("Recipe", favRecipesSchema);

module.exports = { Recipe };
