const { Schema, model } = require('mongoose');

const courseSchema = new Schema(
  {
    reactionId: {
      type: String,
      required: true,
    },
    reactionBody: {
      type: Boolean,
      default: true,
    },
    username: {
      type: Date,
      default: Date.now(),
    },
    createdAt: {
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
