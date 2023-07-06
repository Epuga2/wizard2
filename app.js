const express = require("express");
const morgan = require("morgan");
const postBank = require('./postBank.js')
const app = express();

app.get("/", (req, res) => {
  const posts = postBank.list()
  const html = `<DOCTYPE html>
  <html>
    <head>
   Wizard News
    </head>
    <body>
    <ul>
    ${posts.map( post => `<li>${post.title}</li>` ).join('') }
    </ul>
    </body>
  </html>
  `
res.send(html)
});

app.use(morgan('dev'));
const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
