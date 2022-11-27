const db = require("../db")

async function createUser(name, email, password) {
    db.query(`INSERT INTO users (name,email,password) VALUES ('${name}', '${email}', '${password}');`)
}

module.exports = createUser