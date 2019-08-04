const pool = require('../db/config');
const schoolModel = require('../model/school.model')
const isUserValid = require('../validations/user.validation')
const adminRepo = require('../repository/admin.repository')


exports.addAcademicYear = (req, res) => {
   
    let academicYear = new schoolModel(req.body)

    let academicYearDetails = {
                          academicYear: academicYear.academicYearName,
                          academicReceiptNumber: academicYear.academicReceiptNumber,
                          from: academicYear.academicFrom,
                          to: academicYear.academicTo

                         }
   
      if(academicYear.academicYearName && academicYear.academicReceiptNumber
         && academicYear.academicFrom && academicYear.academicTo)
      {
        adminRepo.addAcademicYear([academicYearDetails])
        .then((result) => {
           return  res.status(201).send({ error: false, data: result, message: 'AcademicYearDetails created successfully' })
           
        })
        .catch((err) => {
           return res.status(400).send({ error: true, message: 'AcademicYearDetails creation failed' });
        });
    }
    else
    {
        return  res.status(400).send({ error: true, message: 'Invalid Academic Year Data' });       

    }
}


exports.editAcademicYear = (req, res) => {
   
    let academicYear = new schoolModel(req.body)
    
    let academicYearDetails = {
                              academicYear: academicYear.academicYearName,
                              academicReceiptNumber: academicYear.academicReceiptNumber,
                              from: academicYear.academicFrom,
                              to: academicYear.academicTo,
                              idAcademicYear: req.academicId
                             }
    
     if(academicYear.academicYearName && academicYear.academicReceiptNumber
         && academicYear.academicFrom && academicYear.academicTo)
      {
        adminRepo.editAcademicYear([academicYearDetails])
        .then((result) => {
           return  res.status(201).send({ error: false, data: result, message: 'AcademicYearDetails updated successfully' })
           
        })
        .catch((err) => {
           return res.status(400).send({ error: true, message: 'AcademicYearDetails update failed' });
        });         
      } 

      else
      {
          return  res.status(400).send({ error: true, message: 'Invalid Academic Year Data' });       
  
      }
    }
	

exports.fetchAcademicYears = (req, res) => {
    adminRepo.fetchAcademicYears()
    .then((result) => {
       return  res.status(201).send({ error: false, data: result, message: 'AcademicYearDetails Fetched successfully' })
       
    })
    .catch((err) => {
       return res.status(400).send({ error: true, message: 'Unable to Fetch AcademicYearDetails' });
    }); 
   
}
   



exports.addMedium = (req, res) => {
    
     let medium = new schoolModel(req.body)
 
     let mediumDetails = {
                          mediumName: medium.mediumName,
                          
                          }
    
       if(medium.mediumName)
       {
        adminRepo.addMedium([mediumDetails])
        .then((result) => {
           return  res.status(201).send({ error: false, data: result, message: 'Medium Details Added successfully' })
           
        })
        .catch((err) => {
           return res.status(400).send({ error: true, message: 'Failed to add Medium Details ' });
        }); 
     }
     else
     {
         return  res.status(400).send({ error: true, message: 'Invalid Medium Data' });       
 
     }
 }
 
 
 exports.editMedium = (req, res) => {
    
    let medium = new schoolModel(req.body)
    
    let mediumDetails = {
                             mediumName: medium.mediumName,
                             idMedium: req.mediumId
                             }
     
      if(medium.mediumName)
        {
            adminRepo.editMedium([mediumDetails])
            .then((result) => {
               return  res.status(201).send({ error: false, data: result, message: 'Medium Details Updated successfully' })
               
            })
            .catch((err) => {
               return res.status(400).send({ error: true, message: 'Failed to Update Medium Details ' });
            }); 
       } 
 
       else
       {
           return  res.status(400).send({ error: true, message: 'Invalid Medium Data' });       
   
       }
     }
     
 
 exports.fetchMedium = (req, res) => {
     
    adminRepo.editMedium()
    .then((result) => {
       return  res.status(201).send({ error: false, data: result, message: 'Medium Details Fetched successfully' })
       
    })
    .catch((err) => {
       return res.status(400).send({ error: true, message: 'Failed to Fetch Medium Details ' });
    }); 
 }
           
 


exports.addReligion = (req, res) => {
    
     let religion = new schoolModel(req.body)
 
     let religionDetails = {
                              religionName: religion.religionName,
                          
                          }
    
       if(religion.religionName)
       {
        adminRepo.addReligion([religionDetails])
        .then((result) => {
           return  res.status(201).send({ error: false, data: result, message: 'Religion Details created successfully' })
           
        })
        .catch((err) => {
           return res.status(400).send({ error: true, message: 'Failed to add Religion Details ' });
        }); 
     }
     else
     {
         return  res.status(400).send({ error: true, message: 'Invalid Religion Data' });       
 
     }
 }
 
 
 exports.editReligion = (req, res) => {
    
    let religion = new schoolModel(req.body)
    
    let religionDetails = {
                                 religionName: religion.religionName,
                                 idReligion: req.idReligion
                             
                             }
     
      if(religion.religionName)
        {
            adminRepo.editReligion([religionDetails])
            .then((result) => {
               return  res.status(201).send({ error: false, data: result, message: 'Religion Details Updated successfully' })
               
            })
            .catch((err) => {
               return res.status(400).send({ error: true, message: 'Failed to update Religion Details ' });
            }); 
       } 
 
       else
       {
           return  res.status(400).send({ error: true, message: 'Invalid Religion Data' });       
   
       }
     }
     
 
 exports.fetchReligion = (req, res) => {
     
    adminRepo.addReligion()
    .then((result) => {
       return  res.status(201).send({ error: false, data: result, message: 'Religion Details Fetched successfully' })
       
    })
    .catch((err) => {
       return res.status(400).send({ error: true, message: 'Failed to Fetch Religion Details ' });
    }); 
 }
                   


exports.addCaste = (req, res) => {
    
     let caste = new schoolModel(req.body)
 
     let casteDetails = {
                          casteName: caste.casteName
                          
                          }
    
       if(caste.casteName)
       {
        adminRepo.addCaste([casteDetails])
        .then((result) => {
           return  res.status(201).send({ error: false, data: result, message: 'Caste Details created successfully' })
           
        })
        .catch((err) => {
           return res.status(400).send({ error: true, message: 'Failed to add Caste Details ' });
        }); 
     }
     else
     {
         return  res.status(400).send({ error: true, message: 'Invalid Caste Data' });       
 
     }
 }
 
 
 exports.editCaste = (req, res) => {
    
    let caste = new schoolModel(req.body)
    
    let casteDetails = {
                             casteName: caste.casteName,
                             idCaste: req.idCaste
                             
                             }
     
      if(caste.casteName)
        {
            adminRepo.editCaste([casteDetails])
            .then((result) => {
               return  res.status(201).send({ error: false, data: result, message: 'Caste Details Updated successfully' })
               
            })
            .catch((err) => {
               return res.status(400).send({ error: true, message: 'Failed to update Caste Details ' });
            }); 
       } 
 
       else
       {
           return  res.status(400).send({ error: true, message: 'Invalid Caste Data' });       
   
       }
     }
     
 
 exports.fetchCaste = (req, res) => {

    adminRepo.fetchCaste()
    .then((result) => {
       return  res.status(201).send({ error: false, data: result, message: 'Caste Details Fetched successfully' })
       
    })
    .catch((err) => {
       return res.status(400).send({ error: true, message: 'Failed to Fetch Caste Details ' });
    }); 
}        

   


exports.addCategory = (req, res) => {
    
     let category = new schoolModel(req.body)
 
     let categoryDetails = {
                          categoryName: category.categoryName
                          
                          }
    
       if(category.categoryName)
       {
        adminRepo.addCategory([categoryDetails])
        .then((result) => {
           return  res.status(201).send({ error: false, data: result, message: 'Category Details created successfully' })
           
        })
        .catch((err) => {
           return res.status(400).send({ error: true, message: 'Failed to add Category Details ' });
        }); 
     }
     else
     {
         return  res.status(400).send({ error: true, message: 'Invalid category Data' });       
 
     }
 }
 
 
 exports.editCategory = (req, res) => {
    
    let category = new schoolModel(req.body)
    
    let categoryDetails = {
                             categoryName: category.categoryName,
                             idCategory: req.idCategory
                             
                             }
     
      if(category.categoryName)
        {
            adminRepo.editCategory([categoryDetails])
            .then((result) => {
               return  res.status(201).send({ error: false, data: result, message: 'Category Details Updated successfully' })
               
            })
            .catch((err) => {
               return res.status(400).send({ error: true, message: 'Failed to Update Category Details ' });
            }); 
       } 
 
       else
       {
           return  res.status(400).send({ error: true, message: 'Invalid category Data' });       
   
       }
     }
     
 
 exports.fetchCategory = (req, res) => {

    adminRepo.fetchCategory()
    .then((result) => {
       return  res.status(201).send({ error: false, data: result, message: 'Category Details Fetched successfully' })
       
    })
    .catch((err) => {
       return res.status(400).send({ error: true, message: 'Failed to Fetch Category Details ' });
    }); 
}                




exports.addClass = (req, res) => {
    
     let classDetails = new schoolModel(req.body)
 
     classDetails = {
                       className: classDetails.categoryName,
                       classDescription: classDetails.classDescription,
                       classPrimary: classDetails.classPrimary
                          
                    }
    
       if(classDetails.categoryName && classDetails.classDescription)
       {
        adminRepo.addClass([classDetails])
        .then((result) => {
           return  res.status(201).send({ error: false, data: result, message: 'Class Details created successfully' })
           
        })
        .catch((err) => {
           return res.status(400).send({ error: true, message: 'Failed to add Class Details ' });
        }); 
     }
     else
     {
         return  res.status(400).send({ error: true, message: 'Invalid class Data' });       
 
     }
 }
 
 
 exports.editClass = (req, res) => {
    
    let classDetails = new schoolModel(req.body)
    
        classDetails = {
                          className: classDetails.categoryName,
                          classDescription: classDetails.classDescription,
                          classPrimary: classDetails.classPrimary,
                          idClass:req.idClass
                             
                       }
     
      if(classDetails.categoryName && classDetails.classDescription)
        {
            adminRepo.editClass([classDetails])
            .then((result) => {
               return  res.status(201).send({ error: false, data: result, message: 'Class Details Updated successfully' })
               
            })
            .catch((err) => {
               return res.status(400).send({ error: true, message: 'Failed to Update Class Details ' });
            });
       } 
 
       else
       {
           return  res.status(400).send({ error: true, message: 'Invalid class Data' });       
   
       }
     }
     
 
 exports.fetchClasses = (req, res) => {

    adminRepo.fetchClasses()
    .then((result) => {
       return  res.status(201).send({ error: false, data: result, message: 'Class Details Fetched successfully' })
       
    })
    .catch((err) => {
       return res.status(400).send({ error: true, message: 'Failed to add Fetch Details ' });
    });
 }                        




exports.addSection = (req, res) => {
    
     let section = new schoolModel(req.body)
 
     let sectionDetails = {
                              sectionName :section.sectionName
                    }
    
       if(section.sectionName)
       {
        adminRepo.addSection([sectionDetails])
        .then((result) => {
           return  res.status(201).send({ error: false, data: result, message: 'Section Details created successfully' })
           
        })
        .catch((err) => {
           return res.status(400).send({ error: true, message: 'Failed to add Section Details ' });
        });
     }
     else
     {
         return  res.status(400).send({ error: true, message: 'Invalid Section Data' });       
 
     }
 }
 
 
 exports.editSection = (req, res) => {
    
    let section = new schoolModel(req.body)
    
        let sectionDetails = {
                                 sectionName : section.sectionName,
                                 idSection : req.idSection
                       }
      if(section.sectionName)
        {
            adminRepo.editSection([sectionDetails])
            .then((result) => {
               return  res.status(201).send({ error: false, data: result, message: 'Section Details updated successfully' })
               
            })
            .catch((err) => {
               return res.status(400).send({ error: true, message: 'Failed to update Section Details ' });
            });
       } 
 
       else
       {
           return  res.status(400).send({ error: true, message: 'Invalid Section Data' });       
   
       }
     }
     
 
 exports.fetchSection = (req, res) => {

    adminRepo.fetchSection()
    .then((result) => {
       return  res.status(201).send({ error: false, data: result, message: 'Section Details fetched successfully' })
       
    })
    .catch((err) => {
       return res.status(400).send({ error: true, message: 'Failed to fetch Section Details ' });
    });

}                                




exports.addSubjectType = (req, res) => {
    
     let subjectType = new schoolModel(req.body)
 
     let subjectTypeDetails = {
                                 subjectTypeName : subjectType.subjectTypeName
                               }
    
       if(subjectType.subjectTypeName)
       {
        adminRepo.addSubjectType([subjectTypeDetails])
        .then((result) => {
           return  res.status(201).send({ error: false, data: result, message: 'Subject Type created successfully' })
           
        })
        .catch((err) => {
           return res.status(400).send({ error: true, message: 'Failed to add Subject Types ' });
        });
     }
     else
     {
         return  res.status(400).send({ error: true, message: 'Invalid SubjectType Data' });       
 
     }
 }
 
 
 exports.editSubjectType = (req, res) => {
    
      
    let subjectType = new schoolModel(req.body)
    
    let subjectTypeDetails = {
                                    subjectTypeName : subjectType.subjectTypeName,
                                    idSubjectType : req.idSubjectType
                                  }

      if(subjectType.subjectTypeName)
        {
            adminRepo.editSubjectType([subjectTypeDetails])
            .then((result) => {
               return  res.status(201).send({ error: false, data: result, message: 'Subject Type updated successfully' })
               
            })
            .catch((err) => {
               return res.status(400).send({ error: true, message: 'Failed to update Subject Types ' });
            });
       } 
 
       else
       {
           return  res.status(400).send({ error: true, message: 'Invalid SubjectType Data' });       
   
       }
     }
     
 
 exports.fetchSubjectTypes = (req, res) => {
     
    adminRepo.fetchSubjectTypes()
    .then((result) => {
       return  res.status(201).send({ error: false, data: result, message: 'Subject Type fetched successfully' })
       
    })
    .catch((err) => {
       return res.status(400).send({ error: true, message: 'Failed to fetch Subject Types ' });
    });
 
}                                        




exports.addSubject = (req, res) => {
    
     let subject = new schoolModel(req.body)
 
     let subjectDetails = {
                           subjectCode :subject.subjectCode,
                           subjectName : subject.subjectTypeName,
                           idSubjectType : subject.subjectType,
                           idMedium: subject.subjectMediumType
                          }
    
       if(subject.subjectCode && subject.subjectTypeName)
       {
        adminRepo.addSubject([subjectDetails])
        .then((result) => {
           return  res.status(201).send({ error: false, data: result, message: 'Subject created successfully' })
           
        })
        .catch((err) => {
           return res.status(400).send({ error: true, message: 'Failed to add Subject  ' });
        });
     }
     else
     {
         return  res.status(400).send({ error: true, message: 'Invalid Subject Data' });       
 
     }
 }
 
 
 exports.editSubject = (req, res) => {
    
      
    let subject = new schoolModel(req.body)
    
    let subjectDetails = {
                              subjectCode :subject.subjectCode,
                              subjectName : subject.subjectTypeName,
                              idSubjectType : subject.subjectType,
                              idMedium: subject.subjectMediumType,
                              idSubject : req.idSubject
                             }

     if(subject.subjectCode && subject.subjectTypeName)
        {
 
            adminRepo.editSubject([subjectDetails])
            .then((result) => {
               return  res.status(201).send({ error: false, data: result, message: 'Subject updated successfully' })
               
            })
            .catch((err) => {
               return res.status(400).send({ error: true, message: 'Failed to update Subject  ' });
            });
       } 
 
       else
       {
           return  res.status(400).send({ error: true, message: 'Invalid Subject Data' });       
   
       }
     }
     
 
 exports.fetchSubjects = (req, res) => {
     
    adminRepo.fetchSubjects()
    .then((result) => {
       return  res.status(201).send({ error: false, data: result, message: 'Subjects fetched successfully' })
       
    })
    .catch((err) => {
       return res.status(400).send({ error: true, message: 'Failed to fetch Subjects ' });
    });
 }                                                