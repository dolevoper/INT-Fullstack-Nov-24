import express from "express";
import * as dataModel from "./data.model";

export const router = express.Router();

router.get("/", (req,res) => {
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

router.get("/:id", (req, res) => {
    const { id } = req.params;
    const doctor = dataModel.getDoctors().get(id);

    if (!doctor) {
        res.status(404);
        res.end();
        return;
    }

    res.json(doctor);
});

router.put("/:id", (req, res) => {
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

router.delete("/:id", (req, res) => {
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