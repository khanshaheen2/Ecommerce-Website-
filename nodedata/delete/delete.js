let mongoose = require('mongoose');

let db =require('../database/db');

let remove = require('express').Router().delete('/',(req,res)=>{
    mongoose.connect("mongodb://localhost:27017/ecommerce",(err,dbs)=>{
        if(err) throw err;
        else{
            let p_id = req.body.p_id;
            db.findByIdAndRemove(p_id).exec((err,result)=>{
                if(err) throw err;
                else{
                    res.send({"delete":"success"});
                }
            });
        }
    });
});

module.exports = remove;