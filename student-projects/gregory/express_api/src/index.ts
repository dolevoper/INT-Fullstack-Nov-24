import { createServer } from "http";
import express from "express";
import { json, urlencoded } from "body-parser";
import * as dataModel from "./data.model";
import { router as patientsRouter } from "./parients.router";
import { router as labsRouter } from "./labs.router";
import { router as doctorsRouter } from "./doctors.router";
import path from "path";




const app = express();
const port = 8080;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.use(express.static(path.join(__dirname, "../dist")));

app.use((req,res,next) => {
    console.log((new Date()).toLocaleString(), req.method, req.url);
    next();    
});

app.use(json());
app.use(urlencoded({ extended: true }));

app.get("/", (req, res) => {
    const doctors = Array.from(dataModel.getDoctors().values());

    res.render("index", {doctors});
});

app.get("/show_patients", (req, res) => {
    const patients = Array.from(dataModel.getPatients().values());

    res.render("show_patients", {patients});
});

app.get("/show_patients/:id", (req, res) => {

    const { id } = req.params;
    const patient = dataModel.getPatients().get(id);

    res.render("patient_file", {patient});
});

app.get("/edit_patient/:id", (req, res) => {

    const { id } = req.params;
    const error = req.query.error || "";
    const patient = dataModel.getPatients().get(id);

    if (patient) {
        res.render("edit_patient", {patient,error});
    }
    else{
        res.render("edit_patient", {name : "",
                                    surname : "",
                                    id : "",
                                    password: "", 
                                    dateOfBirth: "",
                                    address: "",
                                    contactPhone: "",
                                    email: "",error});
    }
});

app.post("/edit_patient/:id", (req,res) => {
    const { id } = req.params;
    const inputBody = req.body as dataModel.Patient;

    const requiredFields: (keyof dataModel.Patient)[] = ["id", "password", "name", "surname", "dateOfBirth", "address", "contactPhone", "email"];
        for (const field of requiredFields) {
            if (!inputBody[field]) {
                console.error(`${field} is missing`);
                res.redirect(`/edit_patient/${id}?error=${field} is missing`);
                return;
            }
        }
    
        if (typeof inputBody.id !== "string") {
            console.error(`Bad ID`);
            res.redirect(`/edit_patient/${id}?error=Bad ID`);            
            return;
        }
        if (id !== inputBody.id){
            console.error(`ID mismatch`);
            res.redirect(`/edit_patient/${id}?error=ID mismatch`);
            return;
        }
        if (typeof inputBody.password !== "string") {
            console.error(`Invalid password format`);
            res.redirect(`/edit_patient/${id}?error=Invalid password format`);            
            return;
        }
        if (typeof inputBody.name !== "string") {
            console.error(`Invalid name format`);
            res.redirect(`/edit_patient/${id}?error=Invalid name format`);
            return;
        }
        if (typeof inputBody.surname !== "string") {
            console.error(`Invalid surname format`);
            res.redirect(`/edit_patient/${id}?error=Invalid surname format`);
            return;
        }
        if (typeof inputBody.address !== "string") {
            console.error(`Invalid adress format`);
            res.redirect(`/edit_patient/${id}?error=Invalid adress format`);
            return;
        }
        if (typeof inputBody.contactPhone !== "string") {
            console.error(`Invalid phone format`);
            res.redirect(`/edit_patient/${id}?error=Invalid phone format`);
            return;
        }
        if (typeof inputBody.email !== "string" || !inputBody.email.includes("@")){ 
            console.error(`Invalid e-mail format`);
            res.redirect(`/edit_patient/${id}?error=Invalid e-mail format`);
            return;
        }
    
        const dateOfBirth = new Date(inputBody.dateOfBirth);  
        if (isNaN(dateOfBirth.getTime())) {
            console.error(`Invalid dateOfBirth format`);
            res.redirect(`/edit_patient/${id}?error=Invalid dateOfBirth format. Expected YYYY-MM-DD`);                        
        }else{
            inputBody.dateOfBirth = dateOfBirth;
        }   
       
    
        dataModel.addPatient(id,inputBody)
            .then(() => {
                console.log(`patient updated, redirecting`);
                res.redirect(`/show_patients/${id}`);
            }).catch((error) => {
                console.error(`problemm in updating, redirecting`);
                res.redirect(`/edit_patient/${id}?error=Applying changes failed, try again.`);
            });     
       
});




app.use("/patients", patientsRouter);
app.use("/labs", labsRouter);
app.use("/doctors", doctorsRouter);

const server = createServer(app);
server.listen(port, () => console.log(`Server listening on port ${port}`));

