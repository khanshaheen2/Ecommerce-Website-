let mongooes = require('mongoose');
let db = require('../database/db');
const e = require('express');

let update = require('express').Router().put('/',(req,res)=>{
    mongooes.connect("mongodb://localhost:27017/ecommerce",(err,dbs)=>{
        if(err) throw err;
        else{
            db.findById(id,(err,result)=>{
                if(err) throw err;
                else{
                    result.p_id=req.body.p_id;
                    result.p_name = req.body.p_name;
                    result.p_description= req.body.p_description;
                    result.p_cost = req.body.p_cost;
                    result.p_img = req.file.p_img;
                    result.save((err,data)=>{
                        if(err) throw err;
                        else{
                            res.send({"update":"success"});
                        }
                    });
                }
            });
        }
    });
});
module.exports = update;