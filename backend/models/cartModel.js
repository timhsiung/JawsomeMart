const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartExpiration = 30 * 24 * 60 * 60; // days * hours * minutes * seconds

const cartSchema = new Schema({
  cookieId: { type: String, required: true, unique: true },
  createdAt: { type: Date, expires: cartExpiration, default: Date.now },
  user_id: {
    // type of ObjectId makes this behave like a foreign key referencing the 'User' collection
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  products: [
    {
      id: {
        // type of ObjectId makes this behave like a foreign key referencing the 'Product' collection
        type: Schema.Types.ObjectId,
        ref: 'Product',
      },
    },
  ],
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = {
  Cart,
};
