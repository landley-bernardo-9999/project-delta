const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');

//initialize the application
const app = express();
const port = 3000;

//authenticate the database.
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'my_dbase'
});

//verify the connection.
connection.connect((err)=>{
    if(err)
        throw err;
    console.log('Connection is successful.');
});

//specify the templating engine (in this case the ejs).
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('index');
});

//listen to the application.
app.listen(port, ()=>{
    console.log('Server started on port '+ port + '.');
});


