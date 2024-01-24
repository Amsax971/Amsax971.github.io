const express = require("express")
const app = express()
const port = 8080
const fs = require("fs")

const date = new Date

const succed = {
  "code": 200,
  "Return": "information transfered without trouble"
}

let name = "{date.hour}{date.day}.json"

app.post('/', (req, res) => {
  let informations = req
  fs.createWriteStream(name)
  fs.writeFileSync(name, informations)
  res.send(succed)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})