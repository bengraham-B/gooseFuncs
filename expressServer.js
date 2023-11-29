function expressServer(port){
    const fs = require('fs')

    const data = `
    const express = require('express')

    const app = express()

    app.listen(${port}, () => {
        console.log("Server running on Port: ${port}")
    })

    //^ <"server": "node server.js"> Add to scripts in package.json
    `

    fs.writeFile('server.js', data, (err) => {
        console.log(err)
    })
}

module.exports = {expressServer}