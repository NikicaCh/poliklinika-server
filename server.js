const express = require("express")
const bodyParser = require("body-parser")
const pdf = require("html-pdf")
const cors = require("cors")

const pdfTemplate = require("./functions/documents")

const app = express()

const port = process.env.PORT || 5000


app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


app.get("/helloworld", (req, res) => {
    res.send("HELLO WORLD DEAR USER, your firebase hosting works perfectlly")
})


// POST -> PDF generation and fetching of the data
app.post('/create-pdf', (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err, response) => {
        if(err) res.send(Promise.reject())
        else {
           if(response) res.send(Promise.resolve())
        }
    })
    
})

// GET -> Send the generated pdf to the client
app.get("/fetch-pdf", (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
})



app.listen(port, () => console.log("Listening to port", port))