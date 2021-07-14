const express = require('express');
const app = express();
const path = require('path');
const port = 3030;
app.use(express.static('public'));

app.get('/',(req,res) => res.sendFile(path.join(__dirname,'views','index.html')))
app.get('/register',(req,res) => res.sendFile(path.join(__dirname,'views','register.html')))
app.get('/login',(req,res) => res.sendFile(path.join(__dirname,'views','login.html')))
app.get('/detailprod',(req,res) => res.sendFile(path.join(__dirname,'views','detailprod.html')))
app.get('/cart',(req,res) => res.sendFile(path.join(__dirname,'views','cart.html')))
app.get('/contact',(req,res) => res.sendFile(path.join(__dirname, 'views', 'contact.html')));


app.listen(port,() => console.log(`Server running in http://localhost:${port}`))