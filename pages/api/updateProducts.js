// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from '../../middleware/mongoose';
import Product from '../../models/Product';

const handler = async (req, res) => {
//   console.log(req.headers.accept);

  if (req.method === 'POST') {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < req.body.length; i++) {
      // eslint-disable-next-line no-await-in-loop
      const products = await Product.findByIdAndUpdate(req.body[i]._id, req.body[i]);
    }

    res.status(200).json({ success: 'Saved' });
  } else {
    res.status(400).json({ error: 'This method is not allowed' });
  }
};

export default connectDb(handler);
