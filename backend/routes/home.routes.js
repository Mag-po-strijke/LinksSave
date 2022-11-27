module.exports = function (router) {

    router.get('/', (req, res)=>{
        res.render('index',{
            pathToCss:'css/home.css'
        })
    })
    
}