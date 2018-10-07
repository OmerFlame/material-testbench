let express = require('express');
let app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/" + "index.html");
});

app.get('/main.js', (req, res) => {
    res.sendFile(__dirname + "/" + "main.js");
});

app.get('/profile', (req, res) => {
   res.sendFile(__dirname + "/" + "profile.html");
});

app.listen(8080, () => {
    console.log('App listening on port 8080');
});