/* eslint-disable import/no-extraneous-dependencies */
import mongoose from 'mongoose';

const { Schema } = mongoose;

const OrderSchema = new Schema({
  userId: { type: Number, required: true }, // String is shorthand for {type: String}
  product: [{
    productId: { type: Number },
    quantity: { type: Number, default: 1 },
  }],
  address: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: String, default: 'Pending', required: true },

}, { timestamps: true });

export default mongoose.model('Order', OrderSchema);
