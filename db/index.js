const express = require('express');
const app = express();
const {PORT} = require('./config');
const path = require('path');
const cors = require("cors");
const errorHandler = require('./middlewares/errorHandler');
const apiRoutes = require('./routes/apiRoutes');

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname,"/ecom-proj/build")));//for development
if(process.env.NODE_ENV === 'production'){
    app.use(express.static("ecom-proj/build"));
}


app.use('/v1',apiRoutes);
app.get('/*',function(req,res){
    //console.log('am i here');
    res.sendFile(path.join(__dirname,'ecom-proj/build/index.html'),function(err){
      if(err){
        res.status(500).send(err);
      }
    })
  })

//errorHandler
app.use(errorHandler);

app.listen(PORT,()=>console.log("server running at port",PORT))