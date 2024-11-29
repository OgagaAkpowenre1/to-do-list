const express = require('express')
const app = express()

const absolutePath = __dirname + '/public/index.html'
const assetsPath = __dirname + '/public/styles/styles.css'

app.get('/', (req, res) => {
    res.sendFile(absolutePath)
})
app.use('/public', express.static(__dirname + '/public'))

app.listen(3000, () => {
    console.log("Listening on port 3000!")
})