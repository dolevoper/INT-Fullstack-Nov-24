import { error } from "console";
import {Patient, Doctor, Laboratory} from "./index";
import { readFile, writeFile} from "fs/promises";

export function importFromCSV(file : string) : Promise<string> {                     

    return readFile(file)
        .then((csvData) => {
            return csvData.toString(); 
        })
        .catch((error) => {
            console.error("Error reading file:", error);
            throw error;
        });       
}

export function saveToCSV(file : string, csvData: string) : Promise<void> {

    return writeFile(file,csvData);
}

export function parsePatiensCSV(csv : string) : Map<string, Patient> {

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

export function parseDoctorsCSV(csv : string) : Map<string, Doctor> {

    const lines = csv.trim().split("\n").map(line => line.replace(/\r/g, ""));
    const doctors = new Map<string, Doctor>();

    for (const line of lines.slice(1)) { 
        // console.log(line);
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


export function parseLabsCSV(csv : string) : Map<string, Laboratory> {

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

export function patientsToCSV(patients : Map<string, Patient>) : string{

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

export function doctorsToCSV(doctors : Map<string, Doctor>) : string{

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

export function labsToCSV(labs : Map<string, Laboratory>) : string{

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
