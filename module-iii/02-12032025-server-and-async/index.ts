import { readFile } from "fs";
import { createServer } from "http";

const server = createServer((req, res) => {
    if (req.url === "/favicon.ico") {
        res.end();
        return;
    }

    console.log(req.method, req.url);
    
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
