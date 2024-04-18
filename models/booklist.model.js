const mongoose = require("mongoose");

// define Schema Class
const Schema = mongoose.Schema;

// Create a Schema object
const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true }
});

// This Activitry creates the collection called activitimodels
// const Activitymodel = mongoose.model("Activity", activitySchema);
// module.exports = Activitymodel;

// create a model based on bookSchema Object
const bookList = mongoose.model("bookList", bookSchema);

// export the model
module.exports = bookList;