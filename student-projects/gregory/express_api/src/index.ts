import { createServer } from "http";
import express from "express";
import { json } from "body-parser";
import { doctorsToCSV, importFromCSV, labsToCSV, parseDoctorsCSV, parseLabsCSV, parsePatiensCSV, patientsToCSV, saveToCSV } from "./filesHandler";
import { error } from "console";

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

const doctorsFilePath = "./data/doctors.csv";
const patientsFilePath = "./data/patients.csv";
const labsFilePath = "./data/laboratories.csv";

importFromCSV(doctorsFilePath)
    .then((csvData) => {
        doctors = parseDoctorsCSV(csvData);
        console.log((new Date()).toLocaleString(),`Doctors loaded from ${doctorsFilePath}`);
    })
    .catch((error) => {
        console.error((new Date()).toLocaleString(),"Failed to load doctors:", error);
    });

importFromCSV(labsFilePath)
    .then((csvData) => {
        labs = parseLabsCSV(csvData);
        console.log((new Date()).toLocaleString(),`Labs loaded from ${labsFilePath}`);
    })
    .catch((error) => {
        console.error((new Date()).toLocaleString(),"Failed to load laboratories:", error);
    });

importFromCSV(patientsFilePath)
    .then((csvData) => {
        patients = parsePatiensCSV(csvData);
        console.log((new Date()).toLocaleString(),`Patients loaded from ${patientsFilePath}`);
    })
    .catch((error) => {
        console.error((new Date()).toLocaleString(),"Failed to load laboratories:", error);
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


app.put("/patients/:id", (req, res) => {
    const { id } = req.params;
    const inputBody = req.body as Patient; 
    
    const requiredFields: (keyof Patient)[] = ["id", "password", "name", "surname", "dateOfBirth", "address", "contactPhone", "email"];
    for (const field of requiredFields) {
        if (!inputBody[field]) {
            res.status(400).json({ error: `Missing field: ${field}` });
            return;
        }
    }

    if (typeof inputBody.id !== "string") {
        res.status(400).json({ error: "Invalid id format" });
        return;
    }
    if (id !== inputBody.id){
        res.status(400).json({ error: "ID mismatch" });
        return;
    }
    if (typeof inputBody.password !== "string") {
        res.status(400).json({ error: "Invalid password format" });
        return;
    }
    if (typeof inputBody.name !== "string") {
        res.status(400).json({ error: "Invalid name format" });
        return;
    }
    if (typeof inputBody.surname !== "string") {
        res.status(400).json({ error: "Invalid surname format" });
        return;
    }
    if (typeof inputBody.address !== "string") {
        res.status(400).json({ error: "Invalid address format" });
        return;
    }
    if (typeof inputBody.contactPhone !== "string") {
        res.status(400).json({ error: "Invalid phone format" });
        return;
    }
    if (typeof inputBody.email !== "string" || !inputBody.email.includes("@")){ 
        res.status(400).json({ error: "Invalid email format" });
        return;
    }

    const dateOfBirth = new Date(inputBody.dateOfBirth);  
    if (isNaN(dateOfBirth.getTime())) {
        res.status(400).json({ error: "Invalid dateOfBirth format. Expected YYYY-MM-DD" });
        return;
    }else{
        inputBody.dateOfBirth = dateOfBirth;
    }   
   

    patients.set(id,inputBody);

    res.status(201);
    res.end();

    const csvData = patientsToCSV(patients);
    saveToCSV(patientsFilePath,csvData)
        .then(() => {
            console.log((new Date()).toLocaleString(),`Patients saved to ${patientsFilePath}`)
        })
        .catch((error) => {
            console.error((new Date()).toLocaleString(),"Failed to save patients:", error);
        });
});

app.put("/doctors/:id", (req, res) => {
    const { id } = req.params;
    const inputBody = req.body as Doctor; 
    
    const requiredFields: (keyof Doctor)[] = ["id", "name", "surname", "department"];
    for (const field of requiredFields) {
        if (!inputBody[field]) {
            res.status(400).json({ error: `Missing field: ${field}` });
            return;
        }
    }

    if (typeof inputBody.id !== "string") {
        res.status(400).json({ error: "Invalid id format" });
        return;
    }  
    if (id !== inputBody.id){
        res.status(400).json({ error: "ID mismatch" });
        return;
    }
    if (typeof inputBody.name !== "string") {
        res.status(400).json({ error: "Invalid name format" });
        return;
    }
    if (typeof inputBody.surname !== "string") {
        res.status(400).json({ error: "Invalid surname format" });
        return;
    }
    if (typeof inputBody.department !== "string") {
        res.status(400).json({ error: "Invalid department format" });
        return;
    }        
   
    doctors.set(id,inputBody);

    res.status(201);
    res.end();

    const csvData = doctorsToCSV(doctors);
    saveToCSV(doctorsFilePath,csvData)
        .then(() => {
            console.log((new Date()).toLocaleString(),`Doctors saved to ${doctorsFilePath}`)
        })
        .catch((error) => {
            console.error((new Date()).toLocaleString(),"Failed to save patients:", error);
        });
});

app.put("/labs/:id", (req, res) => {
    const { id } = req.params;
    const inputBody = req.body as Laboratory; 
    
    const requiredFields: (keyof Laboratory)[] = ["id", "name", "department"];
    for (const field of requiredFields) {
        if (!inputBody[field]) {
            res.status(400).json({ error: `Missing field: ${field}` });
            return;
        }
    }

    if (typeof inputBody.id !== "string") {
        res.status(400).json({ error: "Invalid id format" });
        return;
    }  
    if (id !== inputBody.id){
        res.status(400).json({ error: "ID mismatch" });
        return;
    }
    if (typeof inputBody.name !== "string") {
        res.status(400).json({ error: "Invalid name format" });
        return;
    }    
    if (typeof inputBody.department !== "string") {
        res.status(400).json({ error: "Invalid department format" });
        return;
    }        
   
    labs.set(id,inputBody);

    res.status(201);
    res.end();

    const csvData = labsToCSV(labs);
    saveToCSV(labsFilePath,csvData)
        .then(() => {
            console.log((new Date()).toLocaleString(),`Doctors saved to ${labsFilePath}`)
        })
        .catch((error) => {
            console.error((new Date()).toLocaleString(),"Failed to save patients:", error);
        });
});

app.delete("/patients/:id", (req, res) => {
    const { id } = req.params;
    const deleted = patients.delete(id);

    if (!deleted) {
        res.status(400).json({ error: "No such patient"});        
        return;
    }

    res.status(201);
    res.end();

    const csvData = patientsToCSV(patients);
    saveToCSV(patientsFilePath,csvData)
        .then(() => {
            console.log((new Date()).toLocaleString(),`Patients saved to ${patientsFilePath}`)
        })
        .catch((error) => {
            console.error((new Date()).toLocaleString(),"Failed to save patients:", error);
        });
});

app.delete("/labs/:id", (req, res) => {
    const { id } = req.params;
    const deleted = labs.delete(id);

    if (!deleted) {
        res.status(400).json({ error: "No such laboratory"});        
        return;
    }

    res.status(201);
    res.end();

    const csvData = labsToCSV(labs);
    saveToCSV(labsFilePath,csvData)
        .then(() => {
            console.log((new Date()).toLocaleString(),`Labs saved to ${labsFilePath}`)
        })
        .catch((error) => {
            console.error((new Date()).toLocaleString(),"Failed to save labs:", error);
        });
});

app.delete("/doctors/:id", (req, res) => {
    const { id } = req.params;
    const deleted = doctors.delete(id);

    if (!deleted) {
        res.status(400).json({ error: "No such doctor"});        
        return;
    }

    res.status(201);
    res.end();

    const csvData = doctorsToCSV(doctors);
    saveToCSV(doctorsFilePath,csvData)
        .then(() => {
            console.log((new Date()).toLocaleString(),`Doctors saved to ${doctorsFilePath}`)
        })
        .catch((error) => {
            console.error((new Date()).toLocaleString(),"Faild to save doctors:", error);
        });
});


const server = createServer(app);
server.listen(port, () => console.log(`Server listening on port ${port}`));

