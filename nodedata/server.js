let express = require('express');
let app =  express();
let bodyparser = require('body-parser');
let cors = require('cors');
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use("/fetch",require('./fetch/fetch'));
app.use("/insert",require('./insert/insert'));
app.use("/update",require('./update/update'));
app.use('/delete',require('./delete/delete'));

app.listen(8080);
console.log("server is listening 8080");