const kx = require('knex')({
    client: 'pg',
    connection: {
        database: 'cluckr_dev'
    }
})

kx.on('query', query => {
    console.log(query.sql);
    console.log(query.bindings);
})

module.exports = kx;