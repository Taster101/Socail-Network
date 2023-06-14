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
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
      
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
    thoughts: [
      {
       type: Schema.Types.ObjectId,
       ref: 'thoughts'
      }
    ]
    
    
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
