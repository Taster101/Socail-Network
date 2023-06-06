const { Schema, model } = require('mongoose');

const courseSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: Boolean,
      default: true,
    },
    thoughts: {
      type: Date,
      default: Date.now(),
    },
    friends: {
      type: Date,
      default: () => new Date(+new Date() + 84 * 24 * 60 * 60 * 1000),
    },
    
    
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Course = model('course', courseSchema);

module.exports = Course;
