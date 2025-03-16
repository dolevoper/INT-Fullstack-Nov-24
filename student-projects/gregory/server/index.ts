import { readFile } from "fs";
import { createServer } from "http";

const server = createServer((req, res) => {
    if (!req.url || (req.method !== "GET")) {
        res.writeHead(400, "Wrong request");
        res.end("Bad Request");
        return;
    }
    
    if (req.url === "/favicon.ico") {
        res.writeHead(204);
        res.end();
        return;
    }

    let filePath = "";
    if (req.url === "/"){
        filePath = `./index.html`;
    } else{
        filePath = `.${req.url}`;
    }

    readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404, "Bad Request");
            res.end("404 Not Found");
            return;
        }

        res.writeHead(200);
        res.end(content);
    });

});

server.listen(8080, () => console.log("server is listening on port 8080"));
