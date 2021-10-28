const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const ColumnSavedSchema = require("./models/columns-saved");

const app = express();
//const router = express.Router();

// set up mongodb connection
var mongoDB = 'mongodb://127.0.0.1/column-saver';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
//db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(5000, () => console.log("server is running on port 5000"));

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//const ColumnSaved = mongoose.model('ColumnSaved', ColumnSavedSchema);

app.post('/saveSchema', (req, res) => {
  // save the array, names can be fixed in other screen
  const addedColList = new ColumnSavedSchema({
    name: req.body.name,
    columnlist: req.body.colList,
  })

  addedColList.save()
  res.send(addedColList);
});

// for manage screen
app.get('/', (req, res) => {
  ColumnSavedSchema.find({})
    .exec((err, columns) => {
      if (err) return next(err);
      res.send(columns);
    });
});


// for use button on manage screen
app.get('/:id', (req, res) => {
  ColumnSavedSchema.find({ _id: req.params.id })
    .exec((err, columns) => {
      if (err) return next(err);
      res.send(columns);
    });
});

app.delete('/delete/:id', (req, res) => {
  ColumnSavedSchema.deleteOne({ _id: req.params.id })
    .exec((err, columns) => {
      if (err) return next(err);
      res.send(columns);
    });
});
