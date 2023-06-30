import mongoose from 'mongoose';

// eslint-disable-next-line consistent-return
const connectDb = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    return handler(req, res);
  }
  try {
    await mongoose.connect(process.env.MONGO_URI);
    return handler(req, res);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.message);
  }
};

export default connectDb;
