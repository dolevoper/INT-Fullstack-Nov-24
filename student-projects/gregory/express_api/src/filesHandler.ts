import { error } from "console";
import {Patient, Doctor, Laboratory} from "./index";
import { readFile } from "fs/promises";

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

