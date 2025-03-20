import { error } from "console";
import { readFile, writeFile} from "fs/promises";
import { readFileSync } from "fs";

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

export function getDoctors() : Map<string, Doctor>{
    return doctors;
}

export function getPatients() : Map<string, Patient>{
    return patients;
}

export function getLabs() : Map<string, Laboratory>{
    return labs;
}

export function addPatient(id: string, patient : Patient) : Promise<void>{
    patients.set(id,patient);
    const csvData = patientsToCSV(patients);
    return saveToCSV(patientsFilePath,csvData)
        .then(() => {
            console.log((new Date()).toLocaleString(),`Patients saved to ${patientsFilePath}`)
        })
        .catch((error) => {
            console.error((new Date()).toLocaleString(),"Failed to save patients:", error);
        });
}

export function addDoctor(id: string, doctor : Doctor) : Promise<void>{
    doctors.set(id,doctor);
    const csvData = doctorsToCSV(doctors);
    return saveToCSV(doctorsFilePath,csvData)
        .then(() => {
            console.log((new Date()).toLocaleString(),`Doctors saved to ${doctorsFilePath}`)
        })
        .catch((error) => {
            console.error((new Date()).toLocaleString(),"Failed to save doctors:", error);
        });
}

export function addLab(id: string, lab : Laboratory) : Promise<void>{
    labs.set(id,lab);
    const csvData = labsToCSV(labs);
    return saveToCSV(labsFilePath,csvData)
        .then(() => {
            console.log((new Date()).toLocaleString(),`Labs saved to ${labsFilePath}`)
        })
        .catch((error) => {
            console.error((new Date()).toLocaleString(),"Failed to save labs:", error);
        });
}

export function deletePatient(id : string) : Promise<void>{
    const deleted = patients.delete(id);

    if (!deleted) {
        console.error((new Date()).toLocaleString(),"No such patient");        
        return Promise.reject(new Error("No such patient"));
    }
   
    const csvData = patientsToCSV(patients);
    return saveToCSV(patientsFilePath,csvData)
        .then(() => {
            console.log((new Date()).toLocaleString(),`Patients saved to ${patientsFilePath}`)
        })
        .catch((error) => {
            console.error((new Date()).toLocaleString(),"Failed to save patients:", error);
        });
}

export function deleteLab(id : string) : Promise<void>{
    const deleted = labs.delete(id);

    if (!deleted) {
        console.error((new Date()).toLocaleString(),"No such lab");        
        return Promise.reject(new Error("No such lab"));
    }
   
    const csvData = labsToCSV(labs);
    return saveToCSV(labsFilePath,csvData)
        .then(() => {
            console.log((new Date()).toLocaleString(),`Labs saved to ${labsFilePath}`)
        })
        .catch((error) => {
            console.error((new Date()).toLocaleString(),"Failed to save labs:", error);
        });
}

export function deleteDoctor (id : string) : Promise<void>{
    const deleted = doctors.delete(id);

    if (!deleted) {
        console.error((new Date()).toLocaleString(),"No such doctor");        
        return Promise.reject(new Error("No such doctor"));
    }
   
    const csvData = doctorsToCSV(doctors);
    return saveToCSV(doctorsFilePath,csvData)
        .then(() => {
            console.log((new Date()).toLocaleString(),`Doctors saved to ${doctorsFilePath}`)
        })
        .catch((error) => {
            console.error((new Date()).toLocaleString(),"Failed to save doctors:", error);
        });
}


doctors = parseDoctorsCSV(importFromCSV(doctorsFilePath));
console.log((new Date()).toLocaleString(),`Doctors loaded from ${doctorsFilePath}`);

labs = parseLabsCSV(importFromCSV(labsFilePath));
console.log((new Date()).toLocaleString(),`Labs loaded from ${labsFilePath}`);

patients = parsePatiensCSV(importFromCSV(patientsFilePath));
console.log((new Date()).toLocaleString(),`Patients loaded from ${patientsFilePath}`);

function importFromCSV(file : string) :string  {                     

    try{
        return readFileSync(file).toString();       
    } catch (error){
        console.error((new Date()).toLocaleString(),"Error reading file:", error);
    }       
}

function saveToCSV(file : string, csvData: string) : Promise<void> {

    return writeFile(file,csvData);
}

function parsePatiensCSV(csv : string) : Map<string, Patient> {

    const lines = csv.trim().split("\n").map(line => line.replace(/\r/g, ""));
    const patients = new Map<string, Patient>();

    for (const line of lines.slice(1)) { 
        
        const [id, password, name, surname,dateOfBirth,address,contactPhone,email ] = line.split(",");
          
        patients.set(id,
            {id,
            password,
            name,
            surname,
            dateOfBirth: new Date(dateOfBirth),
            address,
            contactPhone,
            email}
        );
    }
    return patients;
}



function parseDoctorsCSV(csv : string) : Map<string, Doctor> {

    const lines = csv.trim().split("\n").map(line => line.replace(/\r/g, ""));
    const doctors = new Map<string, Doctor>();

    for (const line of lines.slice(1)) { 
        
        const [id,name, surname, department] = line.split(",");
        
        doctors.set(id,
            {id,            
            name,
            surname,
            department}
        );
    }
    return doctors;
}


function parseLabsCSV(csv : string) : Map<string, Laboratory> {

    const lines = csv.trim().split("\n").map(line => line.replace(/\r/g, ""));
    const labs = new Map<string, Laboratory>();

    for (const line of lines.slice(1)) { 
        const [id,name,department] = line.split(",");
        
        labs.set(id,
            {id,            
            name,            
            department}
        );
    }
    return labs;
}

function patientsToCSV(patients : Map<string, Patient>) : string{

    const header : (keyof Patient)[] = ["id", "password", "name", "surname", "dateOfBirth", "address", "contactPhone", "email"];
    header.join(",");

    const rows = Array.from(patients.values()).map(patient => {
        return [
            patient.id,
            patient.password,
            patient.name,
            patient.surname,
            patient.dateOfBirth,
            patient.address,
            patient.contactPhone,
            patient.email
        ].join(",");
    });

    return [header, ...rows].join("\n");
}

function doctorsToCSV(doctors : Map<string, Doctor>) : string{

    const header : (keyof Doctor)[] = ["id", "name", "surname", "department"];
    header.join(",");

    const rows = Array.from(doctors.values()).map(doctor => {
        return [
            doctor.id,            
            doctor.name,
            doctor.surname,
            doctor.department
        ].join(",");
    });

    return [header, ...rows].join("\n");
}

function labsToCSV(labs : Map<string, Laboratory>) : string{

    const header : (keyof Laboratory)[] = ["id", "name", "department"];
    header.join(",");

    const rows = Array.from(labs.values()).map(lab => {
        return [
            lab.id,            
            lab.name,            
            lab.department
        ].join(",");
    });

    return [header, ...rows].join("\n");
}
