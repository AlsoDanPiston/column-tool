const express = require('express');
const mongoose = require("mongoose");
const bodyParser   = require('body-parser');

const ColumnSavedSchema = require("./models/columns-saved");

const app = express();
const router = express.Router();

// set up mysql connection
mongoose.connect("mongodb://localhost/column-saver", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(5000, () => console.log("server is running on port 5000"));

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

router.post('/saveSchema', (req, res) => {
  // save the array, names can be fixed in other screen
  const addedColList = new ColumnSavedSchema({
    name: 'col list with no name',
    columnlist: req.body.colList,
  })

  await addedColList.save()
  res.send(addedColList);
});

// for manage screen
router.get('/allSchemas', (req, res) => {
  ColumnSavedSchema.find({})
    .exec((err, columns) => {
      if (err) return next(err);
      res.send(columns);
    });
});


// for use button on manage screen
router.get('/allSchemas/:id', (req, res) => {


  
});