let db = require('../database/db');
let mongooes = require('mongoose');


let fetch = require('express').Router().get('/',(req,res)=>{
    mongooes.connect("mongodb://localhost:27017/ecommerce",(err,dbs)=>{
        if(err) throw err;
        else{
           db.find((err,Array)=>{
                if(err) throw err;
                else{
                    res.send(Array);
                }
            });
        }
    });

});

module.exports = fetch;