"use strict";
exports.__esModule = true;
var http_1 = require("http");
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var dataModel = require("./data.model");
var parients_router_1 = require("./parients.router");
var labs_router_1 = require("./labs.router");
var doctors_router_1 = require("./doctors.router");
var path_1 = require("path");
var app = express_1["default"]();
var port = 8080;
app.set("view engine", "ejs");
app.set("views", path_1["default"].join(__dirname, "../views"));
app.use(express_1["default"].static(path_1["default"].join(__dirname, "../dist")));
app.use(function (req, res, next) {
    console.log((new Date()).toLocaleString(), req.method, req.url);
    next();
});
app.use(body_parser_1.json());
app.use(body_parser_1.urlencoded({ extended: true }));
app.get("/", function (req, res) {
    var doctors = Array.from(dataModel.getDoctors().values());
    res.render("index", { doctors: doctors });
});
app.get("/new_patient", function (req, res) {
    res.redirect("/edit_patient/new");
});
app.get("/show_patients", function (req, res) {
    var patients = Array.from(dataModel.getPatients().values());
    res.render("show_patients", { patients: patients });
});
app.get("/show_patients/:id", function (req, res) {
    var id = req.params.id;
    var patient = dataModel.getPatients().get(id);
    res.render("patient_file", { patient: patient });
});
app.get("/edit_patient/:id", function (req, res) {
    var id = req.params.id;
    var error = req.query.error || "";
    if (id === "new") {
        var patient_1 = {};
        res.render("edit_patient", { patient: patient_1, error: error });
    }
    var patient = dataModel.getPatients().get(id);
    if (patient) {
        res.render("edit_patient", { patient: patient, error: error });
    }
    else {
        var patient_2 = {};
        res.render("edit_patient", { patient: patient_2, error: error });
    }
});
app.post("/edit_patient/:id", function (req, res) {
    var id = req.params.id;
    var inputBody = req.body;
    var requiredFields = ["id", "password", "name", "surname", "dateOfBirth", "address", "contactPhone", "email"];
    for (var _i = 0, requiredFields_1 = requiredFields; _i < requiredFields_1.length; _i++) {
        var field = requiredFields_1[_i];
        if (!inputBody[field]) {
            console.error(field + " is missing");
            res.redirect("/edit_patient/" + id + "?error=" + field + " is missing");
            return;
        }
    }
    if (typeof inputBody.id !== "string") {
        console.error("Bad ID");
        res.redirect("/edit_patient/" + id + "?error=Bad ID");
        return;
    }
    if (typeof inputBody.password !== "string") {
        console.error("Invalid password format");
        res.redirect("/edit_patient/" + id + "?error=Invalid password format");
        return;
    }
    if (typeof inputBody.name !== "string") {
        console.error("Invalid name format");
        res.redirect("/edit_patient/" + id + "?error=Invalid name format");
        return;
    }
    if (typeof inputBody.surname !== "string") {
        console.error("Invalid surname format");
        res.redirect("/edit_patient/" + id + "?error=Invalid surname format");
        return;
    }
    if (typeof inputBody.address !== "string") {
        console.error("Invalid adress format");
        res.redirect("/edit_patient/" + id + "?error=Invalid adress format");
        return;
    }
    if (typeof inputBody.contactPhone !== "string") {
        console.error("Invalid phone format");
        res.redirect("/edit_patient/" + id + "?error=Invalid phone format");
        return;
    }
    if (typeof inputBody.email !== "string" || !inputBody.email.includes("@")) {
        console.error("Invalid e-mail format");
        res.redirect("/edit_patient/" + id + "?error=Invalid e-mail format");
        return;
    }
    var dateOfBirth = new Date(inputBody.dateOfBirth);
    if (isNaN(dateOfBirth.getTime())) {
        console.error("Invalid dateOfBirth format");
        res.redirect("/edit_patient/" + id + "?error=Invalid dateOfBirth format. Expected YYYY-MM-DD");
    }
    else {
        inputBody.dateOfBirth = dateOfBirth;
    }
    dataModel.addPatient(id, inputBody)
        .then(function () {
        console.log("patient updated, redirecting");
        res.redirect("/show_patients/" + id);
    })["catch"](function (error) {
        console.error("problemm in updating, redirecting");
        res.redirect("/edit_patient/" + id + "?error=Applying changes failed, try again.");
    });
});
app.use("/patients", parients_router_1.router);
app.use("/labs", labs_router_1.router);
app.use("/doctors", doctors_router_1.router);
var server = http_1.createServer(app);
server.listen(port, function () { return console.log("Server listening on port " + port); });
