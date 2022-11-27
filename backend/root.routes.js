const { Router } = require(`express`)
const router = Router()

require("./routes/home.routes.js")(router)
require("./routes/signIn.routes.js")(router)
require("./routes/signUp.routes.js")(router)

module.exports = router