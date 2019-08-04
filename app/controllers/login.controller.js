const bcrypt = require('bcryptjs')
const pool = require('../db/config');
const schoolModel = require('../model/school.model')
const loginRepo = require('../repository/login.repository')

// create user
exports.addUser = (req, res) => {
   
    let userData = new schoolModel(req.body)
    // hash password
    const salt = bcrypt.genSalt(10)
    const hashPassword = bcrypt.hash(req.password, salt)
    
    
      if(userData.userEmailId && hashPassword)
      {
         
        loginRepo.login([userData.userEmailId,hashPassword])
         .then((result) => {
            return  res.status(201).send({ error: false, data: result, message: 'User created successfully' })
            
         })
         .catch((err) => {
            return res.status(400).send({ error: true, message: 'User creation failed' });
         });
      }
    else
    {
        return  res.status(400).send({ error: true, message: 'Invalid User Data' });       

    }
}
