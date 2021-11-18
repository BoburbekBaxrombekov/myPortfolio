const ownerData = require("../database/ownerData")

module.exports = {
    GET(req, res){
        res.render('index.ejs', {ownerData})
    }
}