import { createServer } from "http";

const server = createServer((req, res) => {
    if (req.url !== "/favicon.ico") {
        console.log(req.method, req.url);
    }

    res.write("<h1>hello html</h1>");
    res.end();
});

server.listen(8080, () => console.log("server is listening on port 8080"));
