const pool = require('../db/config');
const schoolModel = require('../model/school.model')
const student = require('../validations/student.validation')
const userRepo = require('../repository/userRepository')
const studentRepo = require('../repository/student.repository')



exports.addStudent = (req, res) => {
   
    var studentData = new schoolModel(req.body)

    var studentDetails = {
                          firstName: studentData.studentFirstName,
                          lastName : studentData.studentLastName,
                          adhaarNumber: studentData.studentAadharNumber,
                          gender: studentData.studentGender,
                          fatherGuardianOccupation: studentData.studentFatherOccupation,
                          fatherGuardianIncome: studentData.studentFatherIncome,
                          permanent_address: studentData.studentPermanentaddress,
                          correspondance_address: studentData.studentCorrespondenceAddress,
                          nationality: studentData.studentNationality,
                          isIncomeGroup: studentData.studentIncomeGroup,
                          birthPlace: studentData.studentBirthPlace,
                          dob: studentData.studentDOB,
                          isMinority: studentData.studentIsMinority,
                          isBlind: studentData.studentIsBlind,
                          isPH: studentData.studentIsPH,
                          isBPL: studentData.studentIsBPL,
                          idReligion: studentData.studentReligion,
                          idCaste: studentData.studentCaste,
                          idCategory: studentData.studentCategory,
                          
                        }
    
      if(student.isStudentValid(studentData))
      {
        
        userRepo.createUser([studentData.studentFirstName + studentData.studentLastName, studentData.studentParentEmail, 'pass',0,0])
          .then((result) => {
           
           userRepo.createUser([studentData.studentFatherName,studentData.studentParentEmail,'pass',1,studentData.studentFatherMobileNo,4])
              .then((result) => {
            studentRepo.addStudentPersonalDetails([studentDetails,{idUser:result.insertId}])
               .then((result) =>{ 

                return  res.status(201).send({ error: false, data: result, fields: fields, message: 'Student created successfully' });  
            
              })  
          })      
           
        })
        .catch((err) => {
           return res.status(400).send({ error: true, message: 'student creation failed' });
        });
    
    }
    else
    {
        return  res.status(400).send({ error: true, message: 'Invalid Student Data' });       

    }
}


exports.addPreAdmissionDetails = (req, res) => {
    
     var preAdmission = new schoolModel(req.body)
    
   
     var preAdmissionDetails = {
        idStudent: req.studentId,
        idAcademicYear: preAdmission.academicYearName,
        totalFeeToBePaid: preAdmission.studentTotalFee,
        initialAmountPaid: preAdmission.studentInitialFeePaid,
        applicationNumber: preAdmission.studentPrevAppNo,
        registrationDate: preAdmission.created_at,
        willingForClassId: preAdmission.studentPrevWillingClass,
        prevClassId: preAdmission.studentPrevClass,
        admissionstatus: 0
 
        }
       if(student.isStudentPreAdmissionValid(preAdmissionDetails))
       {
        studentRepo.addPreAdmissionDetails([preAdmissionDetails])
         .then((result) => {
           return  res.status(201).send({ error: false, data: result, message: 'Add Previous Admission details successfully' })
           
        })
        .catch((err) => {
           return res.status(400).send({ error: true, message: 'Failed to add Previous Admission details' });
        });
     
     }
     else
     {
         return  res.status(400).send({ error: true, message: 'Invalid Admission Data' });       
 
     }
 }
 
 exports.addPreInstitutionDetails = (req, res) => {
    
     var preInstitution = new schoolModel(req.body)
    
   
     var preInstitutionDetails = {
        idStudent: req.studentId,
        institutionName: preInstitution.prevInstitutionName,
        institutionAddress:preInstitution.prevInstitutionAddress,
        isExamPassed:preInstitution.prevExamPassed,
        registerNumber:preInstitution.prevRegisteredNumber,
        yearOfPassing: preInstitution.prevYearOfPassing
 
        }
       if(student.isStudentPreAdmissionValid(preInstitutionDetails))
       {
        studentRepo.addPreInstitutionDetails([preInstitutionDetails])
          .then((result) => {
          return  res.status(201).send({ error: false, data: result, message: 'Add Previous Institution details successfully' })
          
       })
       .catch((err) => {
          return res.status(400).send({ error: true, message: 'Failed to add Previous Institution details' });
       });
     }
     else
     {
         return  res.status(400).send({ error: true, message: 'Invalid Institution Data' });       
 
     }
 }

 exports.addAdmissionDetails = (req, res) => {
    
     var admission = new schoolModel(req.body)
    
   
     var admissionDetails = {
        idStudent: req.studentId,
        registrationNumber:admission.studentAdmissionRegistrationNumber,
        rollNumber: admission.studentAdmissionRollNumber,
        admissionDateTime:admission.created_at,
        feeConcision: admission.studentAdmissionFeeConcision,
        remainingAmount: admission.studentAdmissionRemainingAmount,
        totalAmount: 1000
 
        }
       if(student.isStudentAdmissionValid(admissionDetails))
       {
        studentRepo.addAdmissionDetails([admissionDetails])
          .then((result) => {
        return  res.status(201).send({ error: false, data: result, message: 'Add  Admission details successfully' })
        
     })
     .catch((err) => {
        return res.status(400).send({ error: true, message: 'Failed to add Admission details' });
     });
     }
     else
     {
         return  res.status(400).send({ error: true, message: 'Invalid Admission Data' });       
 
     }
 } 

// fetch all users
exports.fetchStudents = (req, res) => {
    
    studentRepo.getAllStudents()
          .then((result) => {
        return  res.status(201).send({ error: false, data: result, message: 'Student Details Fetched successfully' })
        
     })
     .catch((err) => {
        return res.status(400).send({ error: true, message: 'Failed to Fetch Students details' });
     });
       
 }
   

 exports.editStudent = (req, res) => {
    
     var studentData = new schoolModel(req.body)
 
     var studentDetails = {
                           firstName: studentData.studentFirstName,
                           lastName : studentData.studentLastName,
                           adhaarNumber: studentData.studentAadharNumber,
                           gender: studentData.studentGender,
                           fatherGuardianOccupation: studentData.studentFatherOccupation,
                           fatherGuardianIncome: studentData.studentFatherIncome,
                           permanent_address: studentData.studentPermanentaddress,
                           correspondance_address: studentData.studentCorrespondenceAddress,
                           nationality: studentData.studentNationality,
                           isIncomeGroup: studentData.studentIncomeGroup,
                           birthPlace: studentData.studentBirthPlace,
                           dob: studentData.studentDOB,
                           isMinority: studentData.studentIsMinority,
                           isBlind: studentData.studentIsBlind,
                           isPH: studentData.studentIsPH,
                           isBPL: studentData.studentIsBPL,
                           idReligion: studentData.studentReligion,
                           idCaste: studentData.studentCaste,
                           idCategory: studentData.studentCategory,
                           idStudent: req.studentId
                         }
     
       if(student.isStudentValid(studentData))
       {
         
         userRepo.updateUser([studentData.studentFirstName + studentData.studentLastName, 'pass',0,0])
           .then((result) => {
            
            userRepo.updateUser([studentData.studentFatherName,studentData.studentParentEmail,'pass',1,studentData.studentFatherMobileNo,4])
               .then((result) => {
             studentRepo.editStudentPersonalDetails([studentDetails,{idUser:result.insertId}])
                .then((result) =>{ 
 
                 return  res.status(201).send({ error: false, data: result, fields: fields, message: 'Student updated successfully' });  
             
               })  
           })      
            
         })
         .catch((err) => {
            return res.status(400).send({ error: true, message: 'student update failed' });
         });
     
     }
     else
     {
         return  res.status(400).send({ error: true, message: 'Invalid Student Data' });       
 
     }
 }
 
 // create user
 exports.editPreAdmissionDetails = (req, res) => {
     
      var preAdmission = new schoolModel(req.body)
     
    
      var preAdmissionDetails = {
         idStudent: req.studentId,
         idAcademicYear: preAdmission.academicYearName,
         totalFeeToBePaid: preAdmission.studentTotalFee,
         initialAmountPaid: preAdmission.studentInitialFeePaid,
         applicationNumber: preAdmission.studentPrevAppNo,
         registrationDate: preAdmission.created_at,
         willingForClassId: preAdmission.studentPrevWillingClass,
         prevClassId: preAdmission.studentPrevClass,
         admissionstatus: 0,
         idStudent: req.studentId
  
         }
        if(student.isStudentPreAdmissionValid(preAdmissionDetails))
        {
         studentRepo.editPreAdmissionDetails([preAdmissionDetails])
          .then((result) => {
            return  res.status(201).send({ error: false, data: result, message: 'Uodate Previous Admission details successfully' })
            
         })
         .catch((err) => {
            return res.status(400).send({ error: true, message: 'Failed to Update Previous Admission details' });
         });
      
      }
      else
      {
          return  res.status(400).send({ error: true, message: 'Invalid Admission Data' });       
  
      }
  }
  
  exports.editPreInstitutionDetails = (req, res) => {
     
      var preInstitution = new schoolModel(req.body)
     
    
      var preInstitutionDetails = {
         idStudent: req.studentId,
         institutionName: preInstitution.prevInstitutionName,
         institutionAddress:preInstitution.prevInstitutionAddress,
         isExamPassed:preInstitution.prevExamPassed,
         registerNumber:preInstitution.prevRegisteredNumber,
         yearOfPassing: preInstitution.prevYearOfPassing,
         idStudent: req.studentId
  
         }
        if(student.isStudentPreInstitutionValid(preInstitutionDetails))
        {
         studentRepo.editPreInstitutionDetails([preInstitutionDetails])
           .then((result) => {
           return  res.status(201).send({ error: false, data: result, message: 'Update Previous Institution details successfully' })
           
        })
        .catch((err) => {
           return res.status(400).send({ error: true, message: 'Failed to Update Previous Institution details' });
        });
      }
      else
      {
          return  res.status(400).send({ error: true, message: 'Invalid Institution Data' });       
  
      }
  }
 
  exports.editAdmissionDetails = (req, res) => {
     
      var admission = new schoolModel(req.body)
     
    
      var admissionDetails = {
         idStudent: req.studentId,
         registrationNumber:admission.studentAdmissionRegistrationNumber,
         rollNumber: admission.studentAdmissionRollNumber,
         admissionDateTime:admission.created_at,
         feeConcision: admission.studentAdmissionFeeConcision,
         remainingAmount: admission.studentAdmissionRemainingAmount,
         totalAmount: 1000,
         idStudent: req.studentId
  
         }
        if(student.isStudentAdmissionValid(admissionDetails))
        {
         studentRepo.editAdmissionDetails([admissionDetails])
           .then((result) => {
         return  res.status(201).send({ error: false, data: result, message: 'Update  Admission details successfully' })
         
      })
      .catch((err) => {
         return res.status(400).send({ error: true, message: 'Failed to Update Admission details' });
      });
      }
      else
      {
          return  res.status(400).send({ error: true, message: 'Invalid Admission Data' });       
  
      }
  } 
 
 
	
