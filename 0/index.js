require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/anshu', (req, res) => {
    res.send('AnshuDotCom!')
})

app.get('/login', (req, res)=>{
    res.send('you can login here')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})