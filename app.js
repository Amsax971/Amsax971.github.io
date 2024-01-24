const express = require("express")
const app = express()
const port = 8080

app.post('/', (req, res) => {
  let informations = req
  res.send(informations)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})