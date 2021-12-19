const express = require('express') //import express
require('dotenv').config()
 
const path = require('path')

const PORT = process.env.PORT // 7000

const app = express()

app.use(express.json())

app.use(express.static('client/build'))

app.get('/api/youtube',(_,res) => {
    res.send({
        msg:'hello les coders !'
    })
})

app.get('/*',(_,res) => {
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
})

app.listen(PORT, () =>  {
    console.log(`le serveur est lancé sur le port : ${PORT}`)
}
)
