import { createServer } from "http";
import express from "express";
import { json, urlencoded } from "body-parser";
import * as dataModel from "./data.model";
import { router as patientsRouter } from "./parients.router";
import { router as labsRouter } from "./labs.router";
import { router as doctorsRouter } from "./doctors.router";
import { error } from "console";




const app = express();
const port = 8080;

app.use((req,res,next) => {
    console.log((new Date()).toLocaleString(), req.method, req.url);
    next();    
});

app.use(json());
app.use(urlencoded({ extended: true }));



app.use("/patients", patientsRouter);
app.use("/labs", labsRouter);
app.use("/doctors", doctorsRouter);

const server = createServer(app);
server.listen(port, () => console.log(`Server listening on port ${port}`));

