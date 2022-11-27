const db = require("../db")

async function deleteUser(CONDITION) {
    db.query(`DELETE FROM users WHERE ${CONDITION}`)
}

module.exports = deleteUser