//Twój kod
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded());

app.use(express.static('./public/zadanie01/'));

app.post('/score', (req, res) => {
  const {num1, num2} = req.body;
  if(parseInt(num1) % parseInt(num2) === 0) {
    res.send(`Liczba ${num2} jest dzielnikiem liczby ${num1}`);
  } else {
    res.send(`Liczba ${num2} nie jest dzielnikiem liczby ${num1}`);
  }
});

// app.get('/cookie/show', (req, res) => {
//   const cookies = req.cookies.test;
//   res.send(cookies)
// });
//
// app.get('/cookie/set', (req, res) => {
//   res.cookie('test', 'Hello Worldo', {maxAge : 31536000000,});
//   res.send('Ciastko ustawione')
// });
//
// app.get('/cookie/remove', (req, res) => {
//   res.clearCookie('test');
//   res.send('Ciastko usunięte')
// });

app.listen(3000, () => {
  console.log('Serwer ustawiony na porcie 3000');
});