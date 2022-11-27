const { Pool } = require("pg");
const config = require("config")

const pool = new Pool({
    user:`postgres`,
    password:`${config.get('dbPassword')}`,
    host:`localhost`,
    port:3000,
    database:`${config.get('dbName')}`
})

module.exports = pool