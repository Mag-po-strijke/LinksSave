//addModules===============================================addModules
const createUser = require(`../Database/Functions/CreateUser.js`)
const db = require("../Database/db.js")
const bcrypt = require('bcryptjs')

module.exports = async function (router) {
    let rows;
    await db.query(`SELECT * FROM users;`, (err, result) => {
        rows = result.rows
    })
    
    router.get('/signUp', (req, res) => {
        res.render('signUp', {
            pathToCss: 'css/signUp'
        })
    })

    router.post('/signUp', async (req, res) => {
        const body = req.body

        //isEmptyOrFewSymbols===============================================isEmpty
        for (const i in body) {
            if (!body[i]) {
                res.render('signUp', {
                    error: `Write ${i}`
                })
                return false
            } else if (body[i].length < 6) {
                res.render('signUp', {
                    error: `Write into ${i} some more symbols`
                })
                return false
            }
        }

        //isEmail===============================================isEmail
        const regexEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
        if (!regexEmail.test(req.body.email)) {
            res.render('signUp', {
                error: `Email isn't correct`
            })
            return false
        }
        //===============================================
        for (let i = 0; i < rows.length; i++) {
            const element = rows[i];
            if (element.email === body.email) {
                res.render('signUp', {
                    error: 'bruh'
                })
                return false
            }
        }
        //passWordHard===============================================passWordHard
        const passWordRegex = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g
        if (!passWordRegex.test(body.password)) {
            res.render('signUp', {
                error: `password isn't hard`
            })
            return false
        }
        //Successe===============================================Successe
        const name = body.name
        const email = body.email
        const password = await bcrypt.hash(body.password,12)
        // bcrypt.compare(body.password,password).then(function(result) {
        //     console.log(result);
        // });
        createUser(name, email, password)
        res.render('signUp', {
            successe: true
        })
    })
}