const Express = require('express');
const morgan = require('morgan')

const app = Express();
app.use(morgan('dev'));

app.get('/', (request, response) => {
    response.send('test')
})

app.listen(
    8080,
    () => console.log('Server listening on http://localhost:8080')
)