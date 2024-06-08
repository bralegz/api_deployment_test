import mongoose from "mongoose";
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  year: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  genre: {
    type: Array,
    required: true,
  },
  rate: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
});

//This model called Movie is the representation of the collection movies in the database
const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
