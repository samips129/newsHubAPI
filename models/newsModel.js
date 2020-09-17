const mongoose = require('mongoose');
const slugify = require('slugify');


const newsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'A news must have a title'],
      unique: true,
      trim: true,
      maxlength: [40, 'A news title must have less or equal then 40 characters'],
      minlength: [10, 'A news title must have more or equal then 10 characters']
    },
    summary: {
      type: String,
      trim: true,
      required: [true, 'A news must have a description']
    },
    description: {
      type: String,
      trim: true
    },
    imageCover: {
      type: String,
      required: [true, 'A news must have a cover image']
    },
    images: [String],
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false
    },
    locations: [
      {
        type: {
          type: String,
          default: 'Point',
          enum: ['Point']
        },
        coordinates: [Number],
        address: String,
        description: String,
        day: Number
      }
    ]}
);


const News = mongoose.model('News', newsSchema);

module.exports = News;