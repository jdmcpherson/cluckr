const kx = require('./connection')

kx.schema.createTable('posts', table => {
    table.increments('id')
    table.string('username')
    table.text('content')
    table.string('image_path')
    table.timestamps(false, true)
}).then(() => process.exit()).catch(()=> process.exit())