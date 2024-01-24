const express = require("express")
const app = express()
const port = 8080

const succed = {
  "code": 200,
  "Return": "information transfered without trouble"
}

app.post('/', (req, res) => {
  let informations = req
  res.send(succed)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})