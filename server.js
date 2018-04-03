const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set("PORT", process.env.PORT || 3001);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
})


app.listen(app.get("PORT"), () => {
  console.log(`You are listening on port ${app.get('PORT')}`);
})
