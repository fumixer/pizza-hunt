const { Schema, model } = require('mongoose');
const Pizza = require('./Pizza');
const Comment = require('./Comment');

const PizzaSchema = new Schema(
  {
    pizzaName: {
      type: String
    },
    createdBy: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    size: {
      type: String,
      default: 'Large'
    },
    toppings: [],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false
  }
);

  // create the Pizza model using the PizzaSchema
const Pizza = model('Pizza', PizzaSchema);

// get total count of comments and replies on retrieval
PizzaSchema.virtual('commentCount').get(function() {
  return this.comments.length;
});

comments: [
  {
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }
]

// export the Pizza model
// module.exports = Pizza;

module.exports = { Pizza, Comment };