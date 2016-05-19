const express = require('express'); //function
const r = express.Router();

r.get('/help', (req,resp) => {
    resp.end('help');
    resp.end();
});

let app = express();

app.set('view engine', 'jade');
app.set('views', './views');

app.use('/root', r);

app.use(express.static('./public'));

app.get('/api/movies', (req, resp) => {
    let o = {
        title: 'Interstellar',
        actors: [
            {firstName: 'Brad', lastName: 'Pitt'},
            {firstName: 'Anna', lastName: 'Hathaway'}
        ]
    }
    resp.json(o);
});

app.get('/movie/:id', (req, resp) => {
    let id = req.params.id;
    resp.end('Movie page for movie id: ' + id);
});

app.get('/two', (req, resp) => {
    resp.end('Two');
});

app.use((req, resp) => {
    resp.type('html');
    resp.status(404);
    resp.sendFile('./404.html', {root: './'});
});

app.listen(7000, () => {
    console.log("ready for work");
});