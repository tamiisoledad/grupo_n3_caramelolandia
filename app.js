const express = require('express');
const app = express();
const path = require(path);
const port = 3030;
app.use(express.estatic('public'));

app.get('/detalleprod',(req,res) => res.sendFile(path.join(__dirname,'views','detalleprod.html')))


app.listen(port,() => console.log(`Server running in http://localhost:${port}`))