//addModules===============================================addModules
const express = require(`express`)
const config = require("config")
const expHbs = require(`express-handlebars`)
const rootRoutes = require('./root.routes')

const app = express()
const PORT = config.get("port") || 4000

//HandleBars===============================================HandleBars

const hbs = expHbs.create({
    defaultLayout:`main`,
    extname:`hbs`
})
app.engine(`hbs`,hbs.engine)
app.set(`view engine`,`hbs`)

//middleWhere===============================================middleWhere

app.use(express.static('./public'))
app.use(express.urlencoded({extended:true}))
app.use(rootRoutes)

//serverStart===============================================serverStart
app.listen(PORT, () => {
    console.log(`server successe start on ${PORT} port`);
})