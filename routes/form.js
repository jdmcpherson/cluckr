const Express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const kx = require('../db/connection');
const multer = require('multer');

const router = Express.Router();

router.use(bodyParser.urlencoded({ extended: false }))
router.use(morgan('dev'));
router.use(Express.static(path.join(__dirname, 'public')));
const upload = multer({ dest: path.join(__dirname, '..', 'public', 'uploads') });

router.get('/cluck', (request, response) => {
    response.render('cluck')
})

router.post('/cluck', upload.single('image'), (request, response) => {
    const { body } = request;
    const { username, content } = request.body;

    if (request.file != undefined) {
        const { filename } = request.file;
        kx
            .insert({ username: username, content: content, image_path: `./uploads/${filename}` })
            .into('posts')
            .then(() => response.redirect('/'))
    } else {
        kx
            .insert({ username: username, content: content})
            .into('posts')
            .then(() => response.redirect('/'))
    }
})

module.exports = router;