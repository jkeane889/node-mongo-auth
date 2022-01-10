const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const app = express()
const port = 3000

// connect via mongoose to MongoDB
mongoose.connect('mongodb://localhost:27017/login-app-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// default Express body parser middleware
app.use(express.json())

app.use('/', express.static(path.join(__dirname, 'static')))

app.post('/api/register', async (req, res) => {
  console.log(req.body)
  res.json({ status: 'ok' })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})