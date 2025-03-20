import express from "express";
import * as dataModel from "./data.model";

export const router = express.Router();


router.get("/", (req,res) => {
    const { search } = req.query;
    
    const results = Array.from(dataModel.getPatients().values())
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

router.get("/:id", (req, res) => {
    const { id } = req.params;
    const patient = dataModel.getPatients().get(id);

    if (!patient) {
        res.status(404);
        res.end();
        return;
    }

    res.json(patient);
});


router.put("/:id", (req, res) => {
    const { id } = req.params;
    const inputBody = req.body as dataModel.Patient; 
    
    const requiredFields: (keyof dataModel.Patient)[] = ["id", "password", "name", "surname", "dateOfBirth", "address", "contactPhone", "email"];
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
   

    dataModel.addPatient(id,inputBody)
        .then(() => {
            res.status(201);
            res.end();
        }).catch((error) => {
            res.status(500).json({error});
            res.end();
        });     
   
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const patient  = dataModel.getPatients().get(id);   

    if (!patient) {
        res.status(400).json({ error: "No such patient"});        
        return;
    }
    dataModel.deletePatient(id).then(() => {
        res.status(201);
        res.end();
    }).catch((error) => {
        res.status(500).json({error});
        res.end();
    });          
});