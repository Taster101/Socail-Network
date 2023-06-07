const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: String,
      required: true,
       default: () => new Types.ObjectId() ,
    },
    reactionBody: {
      type: String,
      default: true,
      maxlenght: 280,
    },
    username: {
      type: Date,
      default: Date.now(),
    },
    createdAt: {
      type: Date,
      default: () => new Date(+new Date() + 84 * 24 * 60 * 60 * 1000),
      get: createdAtVal => moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),

    },
    
    
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Reaction = model('course', reactionSchema);

module.exports = Reaction;
