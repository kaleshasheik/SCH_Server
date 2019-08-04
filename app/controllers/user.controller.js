const bcrypt = require('bcryptjs')
const pool = require('../db/config');
const schoolModel = require('../model/school.model')
const user = require('../validations/user.validation')
const userRepo = require('../repository/user.repository')

// create user
exports.addUser = (req, res) => {
   
    let userData = new schoolModel(req.body)
    // hash password
    const salt = bcrypt.genSalt(10)
    const hashPassword = bcrypt.hash('123456', salt)
  
    let userDetails = {
        userName: userData.userName,
        emailId: userData.userEmailId,
        password: hashPassword,
        status: userData.userStatus,
        mobileNumber: userData.userMobileNumber,
        profileImage: userData.userImage,
        idUserType: userData.userType

       }
      if(user.isUserValid(userData))
      {
         
        userRepo.createUser([userDetails])
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

//edit user
exports.editUser = (req, res) => {
   
    var userData = new schoolModel(req.body)
    
    var userDetails = {
        userName: userData.userName,
        emailId: userData.userEmailId,
        password: password,
        status: userData.userStatus,
        mobileNumber: userData.userMobileNumber,
        profileImage: userData.userImage,
        idUserType: userData.userType,
        idUser: req.idUser
       }

     if(user.isUserValid(userData))
       {
        userRepo.updateUser([userDetails])
        .then((result) => {
           return  res.status(201).send({ error: false, data: result, message: 'User updated successfully' })
           
        })
        .catch((err) => {
           return res.status(400).send({ error: true, message: 'User update failed' });
        });
      } 

      else
      {
          return  res.status(400).send({ error: true, message: 'Invalid User Data' });       
  
      }
    }
	
// fetch all users
exports.getAllUsers = (req, res) => {
    
    userRepo.getAllUsers()
    .then((result) => {
       return  res.status(201).send({ error: false, data: result, message: 'Users retrieved successfully' })
       
    })
    .catch((err) => {
       return res.status(400).send({ error: true, message: 'Unable to fetch users failed' });
    });
       
}


exports.fetchUserTypes = (req, res) => {
    
    userRepo.getAllUsersTypes()
    .then((result) => {
       return  res.status(201).send({ error: false, data: result, message: 'Users Types retrieved successfully' })
       
    })
    .catch((err) => {
       return res.status(400).send({ error: true, message: 'Unable to fetch user typesfailed' });
    });
       
}
