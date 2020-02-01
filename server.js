const express = require('express');
var MongoClient = require('mongodb').MongoClient;
const app = express();
const cors = require('cors');
fs = require('fs');
var formidable = require('formidable');

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
      const [result] = await client.labelDetection(`./test.jpg`);
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
            console.log('result' + result);

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

// app.use(multer({dest:'/tamp/'}).array('isUpdata'))
app.get('/upload', (req, res) => {
  res.sendFile(__dirname + '/submit.html');
});
// app.post('/upData',(req,res)=>{
//   console.log(req.files)
//   var result = req.files;
//   result.forEach((value)=>{
//     var newName = value.originalname
//     var readStream = fs.createReadStream(value.path);
//     var writeStrea = fs.createWriteStream(newName);
//     readStream.pipe(writeStrea);
//     console.log(newName +'图片上传成功');
//     readStream.on('error',()=>{console.log('上传失败')})
//   })
//   res.end();
// })
app.get('/query/:item', (req, res) => {
  item = req.params.item + '';
  item = item.substring(0, 1).toUpperCase() + item.substring(1, item.length);

  console.log(item);

  console.log('item' + item);
  MongoClient.connect(url, async (err, db) => {
    var bestbuy_store = await db.db('bestbuy_store');
    if (err) throw err;
    await bestbuy_store
      .collection('products')
      .findOne({ name: item }, function(err, result) {
        if (err) throw err;
        db.close();
        console.log('result' + result);
        res.json(result);
      });
  });
});
app.post('/upData', function(req, res) {
  var form = new formidable.IncomingForm();
  console.log('about to parse');
  form.parse(req, function(error, fields, files) {
    console.log('parsing done');
    console.log(files.upload.path);
    fs.writeFileSync('./test.jpg', fs.readFileSync(files.upload.path));
    res.redirect('/');
  });
});

console.log('welcome to Project Hub');
const PORT = process.env.PORT || 7777;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
