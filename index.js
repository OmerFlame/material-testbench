let express = require('express');
let app = express();
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey('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')

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/" + "index.html");
});

app.get('/main.js', (req, res) => {
    res.sendFile(__dirname + "/" + "main.js");
});

app.get('/profile', (req, res) => {
   res.sendFile(__dirname + "/" + "profile.html");
});

const msg = {
    to: 'renginald.bagel@gmail.com',
    from: 'renginald.bagel@gmail.com',
    subject: 'test',
    text: 'test',
    html: '<strong>test</strong>'
};

app.get('/mail', (req, res) => {
    res.sendFile(__dirname + "/" + "mail.html");
    sgMail.send(msg);
});

app.listen(8080, () => {
    console.log('App listening on port 8080');
});