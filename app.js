const Express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const kx = require('./db/connection');
const multer = require('multer');

const app = Express();

const posts = require('./routes/posts')
const form = require('./routes/form')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'));
app.use(Express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
const upload = multer({ dest: path.join(__dirname, '.', 'public', 'uploads') });


app.use('/', posts)
app.use('/', form)

app.listen(
    8080,
    () => console.log('Server listening on http://localhost:8080')
)