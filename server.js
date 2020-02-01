const express = require('express');
var MongoClient = require('mongodb').MongoClient;
const app = express();
const cors = require('cors');

var url =
  'mongodb+srv://helloworld:bcitteam28@cluster0-r8cwn.mongodb.net/test?retryWrites=true&w=majority';

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());

let visitorNum = 0;
const data = [];
app.get('/', (req, res) => {
  console.log('1');
  
  async function quickstart() {
    try {
      // Imports the Google Cloud client library
      const vision = require('@google-cloud/vision');

      // Creates a client
      const client = new vision.ImageAnnotatorClient();

      // Performs label detection on the image file
      const [result] = await client.labelDetection(`./ipad.jpg`);
      const labels = result.labelAnnotations;
      // console.log('Labels:');
      labels.forEach(label => data.push(label.description));

      MongoClient.connect(url, async (err, db) => {
        var bestbuy_store = await db.db('bestbuy_store');
        if (err) throw err;
        await bestbuy_store
          .collection('products')
          .findOne({ name: data[0] }, function(err, result) {
            if (err) throw err;
            db.close();
            console.log(result);
            
            res.json(result);
          });
      });
    } catch (err) {
      res.send({ err: err.message });
    }
  }
  console.log('2');
  quickstart();
});

app.get('/login', (req, res) => {
  console.log('Visitor' + visitorNum + 'is on the login page');
  res.send('login');
  //res.send(<loginPage>)
});

console.log('welcome to Project Hub');
const PORT = process.env.PORT || 7777;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
