const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const {ProductsRouter} = require('./routers/products-router')
const {WishlistRouter} = require('./routers/wishlist-router')
const {CartRouter} = require('./routers/cart-router')
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> parent of 3670743 (update : removed whole code)
=======

>>>>>>> parent of 3670743 (update : removed whole code)
=======

>>>>>>> parent of 3670743 (update : removed whole code)
const {dbConnection} = require('./db/dbConnection')

// initiate db dbConnection
dbConnection();

app.get('/' , (req , res) =>{
  res.send("hello from home")
})

app.use('/products' , ProductsRouter)
app.use('/wishlist' , WishlistRouter)
app.use('/cart' , CartRouter)

app.listen(3000 , () => console.log("Express up and running...."))