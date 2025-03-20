import express from "express";
import * as dataModel from "./data.model";

export const router = express.Router();

router.get("/", (req,res) => {
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

router.get("/:id", (req, res) => {
    const { id } = req.params;
    const lab = dataModel.getLabs().get(id);

    if (!lab) {
        res.status(404);
        res.end();
        return;
    }

    res.json(lab);
});

router.put("/:id", (req, res) => {
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

router.delete("/:id", (req, res) => {
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
