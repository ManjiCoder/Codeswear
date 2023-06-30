// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from '../../middleware/mongoose';
import Product from '../../models/Product';

const handler = async (req, res) => {
//   console.log(req.headers.accept);

  if (req.method === 'POST') {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < req.body.length; i++) {
      const products = new Product({
        title: req.body[i].title,
        slug: req.body[i].slug,
        desc: req.body[i].desc,
        image: req.body[i].image,
        category: req.body[i].category,
        size: req.body[i].size,
        color: req.body[i].color,
        price: req.body[i].price,
        availableQty: req.body[i].availableQty,
      });
      // eslint-disable-next-line no-await-in-loop
      await products.save();
    }

    res.status(200).json({ success: 'Saved' });
  } else {
    res.status(400).json({ error: 'This method is not allowed' });
  }
};

export default connectDb(handler);
