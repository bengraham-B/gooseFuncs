
    const express = require('express')

    const app = express()

    app.listen(3008, () => {
        console.log("Server running on Port: 3008")
    })

    //^ <"server": "node server.js"> Add to scripts in package.json
    