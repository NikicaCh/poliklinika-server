const express = require("express")
const bodyParser = require("body-parser")
const pdf = require("html-pdf")
const cors = require("cors")
const fs = require("fs")

const employeeTemplate = require("./documents/employee")
const companyTemplate = require("./documents/company")

const app = express()

const port = process.env.PORT || 5000


app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

let data;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",  "Content-Type");
    next();
});


app.get("/helloworld", (req, res) => {
    res.send("HELLO WORLD DEAR USER, your firebase hosting works perfectlly")
})

app.post("/getCompanies", (req, res) => {
    //read the companies json file data
    fs.readFile('./companies.json', 'utf8', (err, jsonString) => {
        if (err) {
            console.log("Error reading file from disk:", err)
            res.send(Promise.reject())
        }
        try {
            data = JSON.parse(jsonString)
            console.log("Data:", data)// => "Customer address is: Infinity Loop Drive"
            if(req.body) {
                res.send(Promise.resolve()) 
            }
        } catch(err) {
                console.log('Error parsing JSON string:', err)
                res.send(Promise.reject())
            }
        })
})

app.get("/getData", (req, res) => {
    res.send(data)
})



// POST -> PDF generation and fetching of the data
app.post('/create-employee-pdf', (req, res) => {
        pdf.create(employeeTemplate(req.body), {}).toFile('result.pdf', (err, response) => {
            if(err) res.send(Promise.reject())
            else {
               if(response) res.send(Promise.resolve())
            }
        })
})

app.post('/create-company-pdf', (req, res) => {
    pdf.create(companyTemplate(req.body), {}).toFile('result.pdf', (err, response) => {
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