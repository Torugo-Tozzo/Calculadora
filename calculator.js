const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function (req, res) {
    var result = Number(req.body.num1) + Number(req.body.num2);
    res.send("O resultado é: " + result);
})


app.get("/IMC", function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/IMC", function (req, res) {
    var imc = Number(req.body.peso) / (Number(req.body.altura) * Number(req.body.altura));
    if (imc < 18) {
        res.send("seu imc = " + imc + ", Voce esta abixo do peso.");
    } else if(imc < 25){
        res.send("seu imc = " + imc + ", Voce esta no peso ideal.");
    } else
        res.send("seu imc = " + imc + ", Voce esta acima do peso.");
})


app.listen(3000, function () {
    console.log("server iniciado na porta 3000");
});