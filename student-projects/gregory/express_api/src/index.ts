import { createServer } from "http";
import express from "express";
import { json, urlencoded } from "body-parser";
import * as dataModel from "./data.model";
import { router as patientsRouter } from "./parients.router";
import { error } from "console";




const app = express();
const port = 8080;

app.use((req,res,next) => {
    console.log((new Date()).toLocaleString(), req.method, req.url);
    next();    
});

app.use(json());
app.use(urlencoded({ extended: true }));

app.get("/doctors", (req,res) => {
    const { search } = req.query;
    
    const results = Array.from(dataModel.getDoctors().values())
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
    const doctor = dataModel.getDoctors().get(id);

    if (!doctor) {
        res.status(404);
        res.end();
        return;
    }

    res.json(doctor);
});


app.get("/labs", (req,res) => {
    const { search } = req.query;
    
    const results = Array.from(dataModel.getLabs().values())
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
    const lab = dataModel.getLabs().get(id);

    if (!lab) {
        res.status(404);
        res.end();
        return;
    }

    res.json(lab);
});



app.put("/doctors/:id", (req, res) => {
    const { id } = req.params;
    const inputBody = req.body as dataModel.Doctor; 
    
    const requiredFields: (keyof dataModel.Doctor)[] = ["id", "name", "surname", "department"];
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
   
    dataModel.addDoctor(id,inputBody).then(() => {
        res.status(201);
        res.end();
    }).catch((error) => {
        res.status(500).json({error});
        res.end();
    });      
});

app.put("/labs/:id", (req, res) => {
    const { id } = req.params;
    const inputBody = req.body as dataModel.Laboratory; 
    
    const requiredFields: (keyof dataModel.Laboratory)[] = ["id", "name", "department"];
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
   
    dataModel.addLab(id,inputBody).then(() => {
        res.status(201);
        res.end();
    }).catch((error) => {
        res.status(500).json({error});
        res.end();
    });      
    
});



app.delete("/labs/:id", (req, res) => {
    const { id } = req.params;
    const lab  = dataModel.getLabs().get(id);   

    if (!lab) {
        res.status(400).json({ error: "No such lab"});        
        return;
    }
    dataModel.deleteLab(id).then(() => {
        res.status(201);
        res.end();
    }).catch((error) => {
        res.status(500).json({error});
        res.end();
    });          
});

app.delete("/doctors/:id", (req, res) => {
    const { id } = req.params;
    const patient  = dataModel.getDoctors().get(id);   

    if (!patient) {
        res.status(400).json({ error: "No such doctor"});        
        return;
    }
    dataModel.deleteDoctor(id).then(() => {
        res.status(201);
        res.end();
    }).catch((error) => {
        res.status(500).json({error});
        res.end();
    });          
});

app.use("/patients", patientsRouter);

const server = createServer(app);
server.listen(port, () => console.log(`Server listening on port ${port}`));

