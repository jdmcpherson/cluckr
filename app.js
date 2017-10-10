const Express = require('express');

const app = Express();

app.get('/', (request, response) => {
    response.send('test')
})

app.listen(
    8080,
    () => console.log('Server listening on http://localhost:8080')
)