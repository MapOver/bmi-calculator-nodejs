var express = require("express");
var getBMICategory = require("./bmi-category");
var waistToHipCalculator = require("./waist-to-hip-calculator");

// create express app
var app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use("/public", express.static("public"));

app.get("/", (req, res) => {
    res.render("pages/landing");
});

app.get("/waist-to-hip", (req, res) => {
    res.render("pages/landing-waist-to-hip");
});

app.get("/result", (req, res) => {
    var m = (parseInt(req.query.cm, 10) / 100);
    var kg = req.query.kg;

    if(m == 0 || isNaN(m)){
        res.redirect("/");
    }else {
        var bmi = (kg / (m * m));
        var cat = getBMICategory(bmi);
        res.render("pages/result", {
            bmi: bmi,
            cat: cat
        });
    }
});

app.get("/result-waist-to-hip", (req, res) => {
    var hip = parseInt(req.query.hip);
    var waist = parseInt(req.query.waist);
    var gender = req.query.gender;

    if((hip == 0 || isNaN(hip)) && (waist == 0 || isNaN(waist))){
        res.redirect("/waist-to-hip");
    }else {
        var ratio = waistToHipCalculator.calculateWaistToHipRatio(waist, hip);
        var cat = waistToHipCalculator.getWaistToHipCategory(gender, ratio);
        res.render("pages/result-waist-to-hip", {
            ratio: ratio,
            cat: cat
        });
    }
});

var port = 8080;
console.log("App is running on http://localhost:"+port)
app.listen(port);
