import { createServer } from "http";
import express from "express";
import { json } from "body-parser";
import { importFromCSV, parseDoctorsCSV, parseLabsCSV, parsePatiensCSV } from "./filesHandler";

export type Patient = {
    id: string;
    password: string;
    name: string;
    surname: string;
    dateOfBirth: Date;
    address: string;
    contactPhone: string;
    email: string;    
}

export type Doctor = {
    id: string;
    name: string;
    surname: string;
    department: string;     
}

export type Laboratory = {
    id: string;
    name: string;
    department: string;
}
let patients :  Map<string, Patient>;
let doctors : Map<string,Doctor>;
let labs : Map<string,Laboratory>;

importFromCSV("./data/doctors.csv")
    .then((csvData) => {
        doctors = parseDoctorsCSV(csvData);
        console.log("doctors loaded");
    })
    .catch((error) => {
        console.error("Failed to load doctors:", error);
    });

importFromCSV("./data/laboratories.csv")
    .then((csvData) => {
        labs = parseLabsCSV(csvData);
        console.log("labs loaded");
    })
    .catch((error) => {
        console.error("Failed to load laboratories:", error);
    });

importFromCSV("./data/patients.csv")
    .then((csvData) => {
        patients = parsePatiensCSV(csvData);
        console.log("patients loaded");
    })
    .catch((error) => {
        console.error("Failed to load laboratories:", error);
    });



const app = express();
const port = 8080;

app.use((req,res,next) => {
    console.log((new Date()).toLocaleString(), req.method, req.url);
    next();    
});

app.use(json());

app.get("/doctors", (req,res) => {
    const { search } = req.query;
    
    const results = Array.from(doctors.values())
        .filter(({ name, surname,department }) =>
            typeof search !== "string" ||
            name.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
            surname.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
            department.toLowerCase().indexOf(search.toLowerCase()) > -1
        )
        .map(({ name, surname, department }) => ({
            name,
            surname,
            department
        }));

    res.json(results);

});

app.get("/doctors/:id", (req, res) => {
    const { id } = req.params;
    const doctor = doctors.get(id);

    if (!doctor) {
        res.status(404);
        res.end();
        return;
    }

    res.json(doctor);
});

app.get("/patients", (req,res) => {
    const { search } = req.query;
    
    const results = Array.from(patients.values())
        .filter(({ name, surname }) =>
            typeof search !== "string" ||
            name.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
            surname.toLowerCase().indexOf(search.toLowerCase()) > -1 
        )
        .map(({ id, name, surname }) => ({
            id,
            name,
            surname
        }));

    res.json(results);
});

app.get("/patients/:id", (req, res) => {
    const { id } = req.params;
    const patient = patients.get(id);

    if (!patient) {
        res.status(404);
        res.end();
        return;
    }

    res.json(patient);
});

app.get("/labs", (req,res) => {
    const { search } = req.query;
    
    const results = Array.from(labs.values())
        .filter(({ name, department }) =>
            typeof search !== "string" ||
            name.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
            department.toLowerCase().indexOf(search.toLowerCase()) > -1 
        )
        .map(({ id, name, department }) => ({
            id,
            name,
            department
        }));

    res.json(results);
});

app.get("/labs/:id", (req, res) => {
    const { id } = req.params;
    const lab = labs.get(id);

    if (!lab) {
        res.status(404);
        res.end();
        return;
    }

    res.json(lab);
});



const server = createServer(app);
server.listen(port, () => console.log(`Server listening on port ${port}`));

