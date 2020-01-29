//import express
const express = require('express');
//import mongodb
var MongoClient = require('mongodb').MongoClient;
//const fs
const fs = require('fs');
//const httpMsg
const httpMsg = require('http-msgs');


//initialize express as 'app'
const app = express();

//the link to mongodb
var url = "mongodb://localhost:27017/mydb";
/*The following is the format of a link to mongoDB:
  mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[database][?options]]
*/


// Init Middleware
app.use(express.json({ extended: false }));
app.use(express.static('static'));

/*
  const <variable name> = fs.readFileSync(__dirname + '/static/<file>', "utf8")
*/


const indexPage = fs.readFileSync(__dirname + '/static/index.html', "utf8")

//redirection
app.use('/js', express.static('static/script'));
app.use('/css', express.static('static/style'));
app.use('/img', express.static('static/img'));






//visitor counter
let visitorNum = 0;

app.get('/', (req, res) => {
    visitorNum++;
    console.log("Visitor" + visitorNum);

    //res.send(<landingPage>)
    res.send(indexPage)
})

app.get('/register', (req, res) => {

    console.log("Visitor" + visitorNum + "is on the register page");
    res.send("register");
    //res.send(<loginPage>)
})

app.get('/login', (req, res) => {

    console.log("Visitor" + visitorNum + "is on the login page");
    res.send("login");
    //res.send(<loginPage>)
})

//createDB
app.get('/create', (req, res) => {

    console.log("Visitor " + visitorNum + " created a DB");
    createDB();
    res.send("created");
    //res.send(<loginPage>)
})

//drop Collection
app.get('/drop', (req, res) => {

    console.log("Visitor " + visitorNum + " dropped a collection");
    dropDB()
    res.send("dropped");
    //res.send(<loginPage>)
  
})

//drop Collection
app.get('/newUser', (req, res) => {
    var data = req.body;
    console.log(data);
    httpMsg.sendJSON(req,res,{
        from : "server"
    })
})




function createDB() {
    // connecting to the URL and the callback is the action function.
    MongoClient.connect(url, function (err, db) {
      
        if (err) throw err;
      
        //dbo stands for db object
        //the first db is the param, the second is db layer of the database.
        var dbo = db.db("mydb");
        //the function to create a collection.
        dbo.createCollection("customers", function (err, res) {
            if (err) throw err;
            console.log("Collection created!");
            db.close();
        });
    });
}

function dropDB() {
    
    MongoClient.connect(url, function(err, db) {
      
        if (err) throw err;
      
        //dbo stands for db object
        var dbo = db.db("mydb");
        dbo.collection("customers").drop(function(err, delOK) {
          if (err) throw err;
          if (delOK) console.log("Collection deleted");
          db.close();
        });
      });
}


//Backend log info
console.log("welcome to Project Hub");
//runs on port >>>>>>>>>>>>>>>>> vv
const PORT = process.env.PORT || 191;
//
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
