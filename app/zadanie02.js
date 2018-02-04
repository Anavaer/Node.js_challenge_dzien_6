//Twój kod
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded());

app.use(express.static('./public/zadanie02/'));

app.post('/cookie/set', (req, res) => {
  const name = req.body.name;
  res.cookie('name', name, {maxAge: 31536000000,});
  res.send('ciastko ustawione');
});

app.get('/cookie/show', (req, res) => {
  const name = req.cookies.name;
  res.send('Your name is ' +name);
});

app.get('/cookie/check', (req, res) => {
  if(req.cookies.name) {
    res.send('imie zostało zapisane');
  } else {
    res.send('imie nie zostało jeszcze zapisane');
  }
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});