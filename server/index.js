//REQUIREMENTS
//native
const path = require('path')
//3rd party
const express = require('express')
const multer = require('multer')
const bodyParser = require('body-parser')
//local
const photo_controller = require('./controllers/photo.js')

const app = express()
const port = process.env.PORT || 8000

//MIDDLEWARE
app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const storage = multer.diskStorage({
  destination: __dirname + '/../public/uploads',
  filename: function (req, file, cb) {
    cb(null, Date.now() + '.jpg') 
  }
})

const upload = multer({ storage: storage });

//INIT SERVER
app.listen(port, () => {
  console.log(`Started on port ${port}`);
})

//ROUTES
app.get('/photos', function (req, res) {
  let photoNames = photo_controller.getPhotos(__dirname + '/../public/uploads')
  res.send(JSON.stringify(photoNames))
})

app.post('/photo/upload', upload.single('myImage'), function(req, res, next) {
  res.redirect('back')
});