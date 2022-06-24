const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

// var Schema = mongoose.Schema;
// var passageSchema = new Schema({
//   title: String,
//   date: { type: Date },
//   content: String
// })


app.use(cors());

app.all('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/getdb', (req, res) => {


  
  mongoose.connect('*************');
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', async function () {
    console.log("Connection is open...");
    // const Passage = mongoose.model('reactjs_passage', passageSchema);
    const collection = db.db.collection("reactjs_passage");
    collection.find({}).toArray(function (err, data) {
    console.log(data); // it will print your collection data
    })
  })
});

const server = app.listen(5000);

