const express = require('express');
const path = require('path');
const api = require("./routes/index.js");

const PORT = process.env.PORT || 3001

const app = express();

//middleware for JSON data 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api)

// allows access to the public folder
app.use(express.static("public"))

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT,function(){
    console.log(`listening on port: http://localhost:${PORT}`)
})
