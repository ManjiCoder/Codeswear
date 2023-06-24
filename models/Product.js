/* eslint-disable import/no-extraneous-dependencies */
import mongoose from 'mongoose';

const { Schema } = mongoose;

const ProductSchema = new Schema({
  title: { type: String, required: true }, // String is shorthand for {type: String}
  slug: { type: String, required: true, unique: true },
  desc: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  size: { type: Number },
  color: { type: String },
  price: { type: Number, required: true },
  availableQty: { type: Number, required: true },

}, { timestamps: true });

export default mongoose.model('Product', ProductSchema);
