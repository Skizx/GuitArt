import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default async function handleProduct(req, res) {
    const {method} = req;
    await mongooseConnect();

    //
    //   Gestion des methodes HTTP via database mongodb
    //

    if(method === 'GET') {
        if(req.query?.id) {
            res.json(await Product.findOne({_id:req.query.id}))
        } else {
            res.json(await Product.find());
        }
    }

    if (method === 'POST') {
        const {title,description,price} = req.body;
        const productdata = await Product.create({
            title,description,price,
        })
        res.json(productdata);
    }

    if (method === 'PUT') {
        const {title,description,price,_id} = req.body;
        res.json(await Product.updateOne({_id}, {title,description,price}))
    }

    if (method === 'DELETE') {
        if(req.query?.id) {
        res.json(await Product.deleteOne({_id:req.query?.id}))
        }
    }
}