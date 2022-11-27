module.exports = function (router) {

    router.get('/signIn',(req,res )=>{
        res.render('signIn',{
            pathToCss:'css/signIn'
        })
    })
    
}