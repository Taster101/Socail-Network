const { Schema, model } = require('mongoose');

const courseSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Boolean,
      default: true,
    },
    username: {
      type: Date,
      default: Date.now(),
    },
    reactions: {
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
