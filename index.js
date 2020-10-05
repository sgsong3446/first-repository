const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://sg3446:sg6765@cluster0.c6lve.mongodb.net/<dbname>?retryWrites=true&w=majoritynpm',{
    useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true,useFindAndModify:false
}).then(()=>console.log("mongodb connected")).catch(err=>console.log('err'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

