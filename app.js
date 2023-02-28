const express = require('express');
const path = require('path');
const fs = require('fs');

let app = express();

app.use('/static' , express.static('static'));
app.use(express.urlencoded());

app.set('view engine' , 'pug');
app.set('views' , path.join(__dirname , 'views'));

app.get('/' , (req,res)=>{
    res.render('index.pug');
});

app.get('/contect' , (req,res)=>{
    // console.log(req.body);
    res.render('contect.pug');
});

app.post('/contect' , (req,res)=>{
    // console.log(req.body);
    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;
    let age = req.body.age;

    let string = `Name : ${name} , Email : ${email} , Phone : ${phone} , Age : ${age}`;

    fs.writeFileSync('Output.txt' , string);

    res.render('contect.pug');
});

app.listen(80,()=>{
    console.log("Running...");
});
