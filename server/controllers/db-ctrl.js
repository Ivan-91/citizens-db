const User = require('../models/user')
const City = require('../models/city')

getUsers = (req, res)=> {
    User.find().then((err, users)=>{
        if (err) {
            res.send(err)
        }
        
        res.json(users)
    })
    
    .catch(err=> console.error(err))
}

getCities = (req, res)=> {
    City.find().then((err, cities)=>{
        if (err) {
            res.send(err)
        }
        
        res.json(cities)
    })
    
    .catch(err=> console.error(err))
}


module.exports = {
    getCities,
    getUsers
}