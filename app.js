const
	express = require('express'),
	app = express(),
	path = require('path'),
	port = 3030;
app.use(express.static('public'));

direction = (x) => (req,res) => res.sendFile(path.join(__dirname, 'views', x))
app.get('/', direction('home.html'));

const page = ['register','login','contact','productDetail','productCart'];
for (let i = page.length - 1; i >= 0; i--) {
	app.get(`/${page[i]}`, direction(`${page[i]}.html`));
}

app.listen(port,() => console.log(`Server running in http://localhost:${port}`))