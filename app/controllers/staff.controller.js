const pool = require('../db/config');
const schoolModel = require('../model/school.model')
const staff = require('../validations/staff.validation')
const staffRepo = require('../repository/staff.repository')


exports.addStaff = (req, res) => {
    
    let staffData = new schoolModel(req.body)


    let staffDetails = {
                        firstName:staffData.staffFirstName,
                        lastName: staffData.staffLastName,
                        adhaarNumber: staffData.staffAadharNumber,
                        gender: staffData.staffGender,
                        permanent_address: staffData.staffPermanentaddress,
                        correspondance_address: staffData.staffCorrespondenceAddress,
                        nationality: staffData.staffNationality,
                        dob: staffData.staffDOB
                        }
    const salt = bcrypt.genSalt(10)
    const hashPassword = bcrypt.hash('123456', salt)
  
    let userDetails = {
        userName: staffData.staffFirstName + staffData.staffLastName,
        emailId: staffData.staffEmailId,
        password: hashPassword,
        status: 1,
        mobileNumber: '000',
        idUserType: 2

       }
    
       if(staff.isStaffValid(staffData))
       {
      
        userRepo.createUser([userDetails])
        .then((result) => {
        
            staffRepo.add([staffDetails,{idUser:result.insertId}])
             .then((result) =>{ 

              return  res.status(201).send({ error: false, data: result, fields: fields, message: 'Staff created successfully' });  
          
            })  
      
         
      })
      .catch((err) => {
         return res.status(400).send({ error: true, message: 'Staff creation failed' });
      });
     }
     else
     {
         return  res.status(400).send({ error: true, message: 'Invalid Staff Data' });       
 
     }
 }
 
 
exports.editStaff = (req, res) => {
    
    let staffData = new schoolModel(req.body)


    let staffDetails = {
                        firstName:staffData.staffFirstName,
                        lastName: staffData.staffLastName,
                        adhaarNumber: staffData.staffAadharNumber,
                        gender: staffData.staffGender,
                        permanent_address: staffData.staffPermanentaddress,
                        correspondance_address: staffData.staffCorrespondenceAddress,
                        nationality: staffData.staffNationality,
                        dob: staffData.staffDOB,
                        idStaff: staffData.staffId
                        }
    
  
    let userDetails = {
        userName: staffData.staffFirstName + staffData.staffLastName,
        emailId: staffData.staffEmailId,
       
        status: 1,
        mobileNumber: '000',
        idUserType: 2

       }
    
       if(staff.isStaffValid(staffData))
       {
      
        staffRepo.updateStaff([staffDetails])
        .then((result) => {
        

              return  res.status(201).send({ error: false, data: result, fields: fields, message: 'Staff Details Updated successfully' });  
                  
      })
      .catch((err) => {
         return res.status(400).send({ error: true, message: 'Staff Update failed' });
      });
     }
     else
     {
         return  res.status(400).send({ error: true, message: 'Invalid Staff Data' });       
 
     }
 }

