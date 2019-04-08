var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Schemas:
var foodSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    type: { type: String, required: true, trim: true },
    frig: { type: Boolean, required: true },
    count: { type: Number, default: 1 },
    _creator: {
      type: mongoose.Schema.Types.ObjectId,
      require: true
    }
  },
  { timestamps: { createdAt: "created_at" } }
);

// Model
var Food = mongoose.model("Food", foodSchema);

module.exports = { Food };
