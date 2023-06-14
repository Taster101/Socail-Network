const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
    },
    createdAt: {
      type: String,
      //default: true,
      //get: createdAtVal => moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
    },
    username: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    reactions: [reactionSchema]
    
     
    
    
    
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
