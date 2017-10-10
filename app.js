const Express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = Express();

app.use(morgan('dev'));
app.use(Express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
    response.render('index')
})

app.listen(
    8080,
    () => console.log('Server listening on http://localhost:8080')
)