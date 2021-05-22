const express = require('express')
var bodyParser = require('body-parser');
const ProductsRouter = express.Router();
const cors = require('cors')
ProductsRouter.use(cors())
const {Products} = require('../models/products-model')
// to parse the data coming from body as JSON we need to use body-parser
ProductsRouter.use(cors())
// Middleware to make the data as JSON
// ProductsRouter.use(bodyParser.json());

ProductsRouter.route('/')
.get(async (req,  res) =>{
  // get all
  try{
    
    const myData = await Products.find({})
    console.log({myData})
    res.json({myData : myData })
  }
  catch(error){
    res.json({status : false , message : "failed" , errMessage : error.message})
  }

})
.post(async (req  , res) => {
  try{
    const data = req.body
    console.log(data)
    const NewProduct = new Products(data)
    const SavedProduct =await  NewProduct.save()
    res.json({status : true  , SavedProduct})
  }catch(error){ res.status(500).json({status : false  ,
  message : "sorry couldn't add the product" , errMessage : error.message })}
})

module.exports = {ProductsRouter};

