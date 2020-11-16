let mongoose = require('mongoose');
let uploads = require('../multer/multer');
let db = require('../database/db');

let insert = require('express').Router().post('/',uploads,(req,res)=>{
    mongoose.connect('mongodb://localhost:27017/ecommerce',(err,dbs)=>{
        if(err) throw err;
        else{

            var data = new db({
                "p_id":req.body.p_id,
                "p_name":req.body.p_name,
                "p_description":req.body.p_description,
                "p_cost":req.body.p_cost,
                "p_img":req.file.filename
            });
            data.save((err,result)=>{
                if(err) throw err;
                else{
                    res.send({"insert":"success"});
                }
            });
        }
});
});
module.exports = insert;