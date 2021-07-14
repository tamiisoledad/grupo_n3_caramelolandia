const express = require('express');
const app = express();
const path = require(path);
const port = 3030;
app.use(express.estatic('public'));

app.get('/',(req,res) => res.sendFile(path.join(__dirname,'views','index.html')))
app.get('/register',(req,res) => res.sendFile(path.join(__dirname,'views','register.html')))
app.get('/login',(req,res) => res.sendFile(path.join(__dirname,'views','login.html')))
app.get('/productDetail',(req,res) => res.sendFile(path.join(__dirname,'views','productDetail.html')))
app.get('/productCart',(req,res) => res.sendFile(path.join(__dirname,'views','productCart.html')))


app.listen(port,() => console.log(`Server running in http://localhost:${port}`))