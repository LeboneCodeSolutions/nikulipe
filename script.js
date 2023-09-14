import express from 'express';
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(__dirname));

const commonHandler = (req, res) => {
    res.sendFile(__dirname + '/public/404-page.html');
};

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Handle similar routes with a loop
['/solutions', '/insights', '/company', '/contact_us'].forEach(route => {
    app.get(route, commonHandler);
});

app.listen(3000);
