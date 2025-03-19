import { randomUUID } from "crypto";
import { createServer } from "http";


type Computer = {
    id: string,
    createdAt: number,
    description?: string,
    price: number,
};

let computers: Computer[] = [];


const server = createServer((req, res) => {
    console.log(req.method, req.url);

    if (req.method === "GET" && req.url === "/computers") {
        res.writeHead(200, {
            "content-type": "appliction/json"
        });
        res.write(JSON.stringify(computers));

    } else if (req.method === "PUT" && req.url === "/computers") {
        computers.push({
            id: randomUUID().replace("-", "").slice(-8),
            createdAt: Date.now(),
            price: 2500,
        });
        
        res.writeHead(201);
    } else {
        res.writeHead(404);
    }

    res.end();
});


server.listen(8430, () => console.log("Server listening on port 8430"));
