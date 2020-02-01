<<<<<<< HEAD
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


=======
const express = require('express');
var MongoClient = require('mongodb').MongoClient;
const app = express();

// Init Middleware
app.use(express.json({ extended: false }));

let visitorNum = 0;

app.get('/', (req, res) => {

    async function quickstart() {
        // Imports the Google Cloud client library
        const vision = require('@google-cloud/vision');
      
        // Creates a client
        const client = new vision.ImageAnnotatorClient();
      
        // Performs label detection on the image file
        const [result] = await client.labelDetection(`https://www.google.com/imgres?imgurl=https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d35eacaf1176b0008974b54%2F960x0.jpg%3FcropX1%3D790%26cropX2%3D5350%26cropY1%3D784%26cropY2%3D3349&imgrefurl=https%3A%2F%2Fwww.forbes.com%2Fsites%2Fjimgorzelany%2F2019%2F07%2F23%2Fhere-are-the-coolest-new-cars-for-2020%2F&docid=HZLLyFhoQjvNCM&tbnid=ocRp6IDmQhQL3M%3A&vet=10ahUKEwjJpcP9_q_nAhXB7Z4KHTQFD44QMwiAASgDMAM..i&w=960&h=540&bih=730&biw=1536&q=car&ved=0ahUKEwjJpcP9_q_nAhXB7Z4KHTQFD44QMwiAASgDMAM&iact=mrc&uact=8`);
        const labels = result.labelAnnotations;
        console.log('Labels:');
        labels.forEach(label => console.log(label.description));
        return result;
      }
      const yes = quickstart();
      res.json(yes);
})

app.get('/login', (req, res) => {

    console.log("Visitor" + visitorNum + "is on the login page");
    res.send("login");
    //res.send(<loginPage>)
})






console.log("welcome to Project Hub");
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


>>>>>>> 66f9c0ccb09834b418ec28ebc28380df60158216
