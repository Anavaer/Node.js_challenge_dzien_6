//Twój kod
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded());

app.use(express.static('./public/zadanieDnia/'));

app.get('/', (req, res) => {
  if(req.cookies.comments) {
    const comments = JSON.parse(req.cookies.comments);
    res.send(comments);
  } else {
    res.send('no comment');
  }
});

app.post('/save', (req, res) => {
  const comment = req.body.comment;
  if(req.cookies.comments) {
    const comments = JSON.parse(req.cookies.comments);
    comments.push(comment);
    res.cookie('comments', JSON.stringify(comments), {maxAge: 31536000000,});
  } else {
    res.cookie('comments', JSON.stringify([comment]), {maxAge: 31536000000,});
  }
  res.send(`<a href="/">Main Page</a>`)
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});