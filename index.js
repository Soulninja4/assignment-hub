import express from 'express';
const app = express();
const port = process.env.PORT || 8080;
import cors from 'cors';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
app.use(cors());


const __dirname =  dirname(fileURLToPath(import.meta.url))

app.use(express.static('public'));

app.get('*', (req, res) => {
   res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
app.listen(port, () => {
   console.log(`Server is up at port ${port}`);
});