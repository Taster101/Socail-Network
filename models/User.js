const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      Unique: true,
    },
    email: {
      type: String,
      default: true,
      unique: true,
      
        validator: email
      ,

    },
    thoughts: {
      type: Schema.Types.ObjectId,
      ref: `thought`,
    },
    friends: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    
    
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const User = model('user', userSchema);

module.exports = User;
