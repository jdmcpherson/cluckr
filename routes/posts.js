const Express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const kx = require('../db/connection');
const multer = require('multer');
const moment = require('moment');

const router = Express.Router();
moment().format();

router.use(bodyParser.urlencoded({ extended: false }))
router.use(morgan('dev'));
router.use(Express.static(path.join(__dirname, 'public')));
const upload = multer({ dest: path.join(__dirname, '..', 'public', 'uploads') });

router.get('/', (request, response) => {
    kx
        .select()
        .from('posts')
        .orderBy('created_at', 'DESC')
        .then(posts => {
            response.render('index', { posts, moment })
        })
})

module.exports = router;