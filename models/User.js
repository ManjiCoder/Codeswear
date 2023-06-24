/* eslint-disable import/no-extraneous-dependencies */
import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: { type: String, required: true }, // String is shorthand for {type: String}
  email: { type: String, required: true, unquie: true },
  password: { type: String, required: true },

}, { timestamps: true });

export default mongoose.model('User', UserSchema);
