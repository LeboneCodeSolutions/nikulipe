import express from 'express';
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(__dirname)); // This line serves static files from the current directory

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000);
