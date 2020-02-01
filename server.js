const express = require('express');
var MongoClient = require('mongodb').MongoClient;
const app = express();

// Init Middleware
app.use(express.json({ extended: false }));

let visitorNum = 0;

app.get('/', (req, res) => {

    async function quickstart() {
        try {
        // Imports the Google Cloud client library
        const vision = require('@google-cloud/vision');
      
        // Creates a client
        const client = new vision.ImageAnnotatorClient();
      
        // Performs label detection on the image file
        const [result] = await client.labelDetection(`./1.webp`);
        const labels = result.labelAnnotations;
        const data=[];
        console.log('Labels:');
        labels.forEach(label => data.push(label.description));
        console.log(data);
        
        res.json(data);    
        } catch (err) {

            res.send({error:err.message});
        }
        


      }
      quickstart();
})

app.get('/login', (req, res) => {

    console.log("Visitor" + visitorNum + "is on the login page");
    res.send("login");
    //res.send(<loginPage>)
})






console.log("welcome to Project Hub");
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


