const express = require('express')
const path = require('path')

const app = express()

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname, '../tictacjs.html'));
});

app.get('/style.css', (req, res) => {
  res.sendFile(path.join(__dirname, '../style.css'))
})
const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})