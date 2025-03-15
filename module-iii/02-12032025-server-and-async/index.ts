import { readFile } from "fs";
import { createServer } from "http";

const server = createServer((req, res) => {
    if (req.url === "/favicon.ico") {
        res.end();
        return;
    }
    
    console.log(req.method, req.url);

    if (req.url === "/image.png") {
        readFile("./image.png", (err, content) => {
            if (err) {
                console.error(err);
                res.writeHead(500, "Oops, something went wrong...");
                res.end();
                return;
            }
    
            res.write(content);
            res.end();
        });

        return;
    }

    if (req.url === "/about.html") {
        readFile("./about.html", (err, content) => {
            if (err) {
                console.error(err);
                res.writeHead(500, "Oops, something went wrong...");
                res.end();
                return;
            }
    
            res.write(content);
            res.end();
        });

        return;
    }

    readFile("./index.html", (err, content) => {
        if (err) {
            console.error(err);
            res.writeHead(500, "Oops, something went wrong...");
            res.end();
            return;
        }

        res.write(content);
        res.end();
    });
});

server.listen(8080, () => console.log("server is listening on port 8080"));
