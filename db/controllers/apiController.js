const fs = require('fs');
const path = require('path');


module.exports.getProduct = async(req,res)=>{
    //console.log(path.resolve());
    const fileName = "db.json";
    fs.readFile(`${path.resolve()}/mock_data/${fileName}`,(err,json)=>{
        if(err){
            const error = {status:400,message:err};
            throw(error);
        }
        const obj = JSON.parse(json);
        res.json(obj);
    })
}

module.exports.searchProducts = async(req,res)=>{
    const fileName = "db.json";
    const search = req.query.q.toLowerCase();
    
    //console.log('serach keu',search);
    fs.readFile(`${path.resolve()}/mock_data/${fileName}`,(err,json)=>{
        if(err){
            const error = {status:400,message:err};
            throw(error);
        }  
        const obj = JSON.parse(json);
        const searchArr = obj.product;
        const searchResult = searchArr.filter((data)=>
        data.name.toLowerCase().includes(search)
        )
        obj.product = searchResult;
        res.send(obj);
    })
}

