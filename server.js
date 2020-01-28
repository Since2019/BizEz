const express = require('express');
var MongoClient = require('mongodb').MongoClient;
const app = express();

// Init Middleware
app.use(express.json({ extended: false }));

let visitorNum = 0;

app.get('/', (req, res) => {
    visitorNum++;
    console.log("Visitor" + visitorNum);
    res.send("hello");
    //res.send(<landingPage>)
})

app.get('/login', (req, res) => {

    console.log("Visitor" + visitorNum + "is on the login page");
    res.send("login");
    //res.send(<loginPage>)
})



console.log("welcome to Project Hub");
const PORT = process.env.PORT || 90;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


