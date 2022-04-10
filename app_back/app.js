const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');

var app = express();

const PORT = 3000;
app.use(cors());
app.use(bodyparser.json());
app.use('/',(req, res)=>{
  res.json('working');
});
app.listen(PORT , ()=>{
  console.log("server started on port:"+PORT);
});
