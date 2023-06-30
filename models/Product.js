/* eslint-disable import/no-extraneous-dependencies */
import mongoose, { Schema } from 'mongoose';

const ProductSchema = new Schema({
  title: { type: String, required: true }, // String is shorthand for {type: String}
  slug: { type: String, required: true, unique: true },
  desc: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  size: { type: String },
  color: { type: String },
  price: { type: Number, required: true },
  availableQty: { type: Number, required: true },

}, { timestamps: true });

mongoose.models = {};
export default mongoose.model('Product', ProductSchema);
