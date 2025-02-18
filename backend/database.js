const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'uppc',
    password: '@Lema/3928',
    port: 5432,
})

module.exports = pool