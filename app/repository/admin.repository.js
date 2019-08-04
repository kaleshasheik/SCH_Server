const pool = require('../db/config');

exports.addAcademicYear = (academicYearDetails) =>{
   console.log('userDetails', academicYearDetails)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
           var query =  pool.query('INSERT INTO tblacademicyear SET ?', academicYearDetails, (error, results, fields) => {    
                
          if (error) {
            reject('Opps!. Something went wrong');
          } else {
            resolve(results);
          }
        }, 2000)
     console.log('create user', query.sql)
     })
      }); 
      
    }
    
    
exports.editAcademicYear = (academicYearDetails) =>{
        
              
    return new Promise((resolve, reject) => {
        setTimeout(() => {
         var query=   pool.query('UPDATE tblacademicyear SET  ? WHERE idAcademicYear = :idAcademicYear', academicYearDetails, (error, results, fields) => {
                
          if (error) {
            reject('Opps!. Something went wrong');
          } else {
            resolve(results);
          }
        }, 2000)
        console.log('update user', query.sql)
        
     })
      }); 
 }
    
 exports.fetchAcademicYears = () =>{
    
     return new Promise((resolve, reject) =>{
        setTimeout(() => {
            pool.query('SELECT * FROM tblacademicyear' , (error, result) => {
                
          if (error) {
            reject('Opps!. Something went wrong');
          } else {
            resolve(results);
          }
        }, 2000);
     })
      }); 
 }       



exports.addMedium = (mediumDetails) =>{
   console.log('userDetails', mediumDetails)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
           var query =  pool.query('INSERT INTO tblmedium SET ?', mediumDetails, (error, results, fields) => {    
                
          if (error) {
            reject('Opps!. Something went wrong');
          } else {
            resolve(results);
          }
        }, 2000)
     console.log('create user', query.sql)
     })
      }); 
      
    }
    
    
exports.editMedium = (mediumDetails) =>{
        
              
    return new Promise((resolve, reject) => {
        setTimeout(() => {
         var query=   pool.query('UPDATE tblmedium SET  ? WHERE idMedium = :idMedium', mediumDetails, (error, results, fields) => {
                
          if (error) {
            reject('Opps!. Something went wrong');
          } else {
            resolve(results);
          }
        }, 2000)
        console.log('update user', query.sql)
        
     })
      }); 
 }
    
 exports.fetchMedium = () =>{
    
     return new Promise((resolve, reject) =>{
        setTimeout(() => {
            pool.query('SELECT * FROM tblmedium' , (error, result) => {
                
          if (error) {
            reject('Opps!. Something went wrong');
          } else {
            resolve(results);
          }
        }, 2000);
     })
      }); 
 }       


exports.addReligion = (religionDetails) =>{
   console.log('addReligion', religionDetails)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
           var query =  pool.query('INSERT INTO tblreligion SET ?', religionDetails, (error, results, fields) => {    
                
          if (error) {
            reject('Opps!. Something went wrong');
          } else {
            resolve(results);
          }
        }, 2000)
     console.log('create user', query.sql)
     })
      }); 
      
    }
    
    
exports.editReligion = (religionDetails) =>{
        
              
    return new Promise((resolve, reject) => {
        setTimeout(() => {
         var query=   pool.query('UPDATE tblreligion SET  ? WHERE idReligion = :idReligion', religionDetails, (error, results, fields) => {
                
          if (error) {
            reject('Opps!. Something went wrong');
          } else {
            resolve(results);
          }
        }, 2000)
        console.log('update user', query.sql)
        
     })
      }); 
 }
    
 exports.fetchReligion = () =>{
    
     return new Promise((resolve, reject) =>{
        setTimeout(() => {
            pool.query('SELECT * FROM tblreligion' , (error, result) => {
                
          if (error) {
            reject('Opps!. Something went wrong');
          } else {
            resolve(results);
          }
        }, 2000);
     })
      }); 
 }       
 


exports.addCaste = (casteDetails) =>{
   console.log('addCaste', casteDetails)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
           var query =  pool.query('INSERT INTO tblcaste SET ?', casteDetails, (error, results, fields) => {    
                
          if (error) {
            reject('Opps!. Something went wrong');
          } else {
            resolve(results);
          }
        }, 2000)
     console.log('create user', query.sql)
     })
      }); 
      
    }
    
    
exports.editCaste = (casteDetails) =>{
        
              
    return new Promise((resolve, reject) => {
        setTimeout(() => {
         var query=   pool.query('UPDATE tblcaste SET  ? WHERE idCaste = :idCaste', casteDetails, (error, results, fields) => {
                
          if (error) {
            reject('Opps!. Something went wrong');
          } else {
            resolve(results);
          }
        }, 2000)
        console.log('update user', query.sql)
        
     })
      }); 
 }
    
 exports.fetchCaste = () =>{
    
     return new Promise((resolve, reject) =>{
        setTimeout(() => {
            pool.query('SELECT * FROM tblcaste' , (error, result) => {
                
          if (error) {
            reject('Opps!. Something went wrong');
          } else {
            resolve(results);
          }
        }, 2000);
     })
      }); 
 }       

 

exports.addCategory = (categoryDetails) =>{
   console.log('addCaste', categoryDetails)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
           var query =  pool.query('INSERT INTO tblcategories SET ?', categoryDetails, (error, results, fields) => {    
                
          if (error) {
            reject('Opps!. Something went wrong');
          } else {
            resolve(results);
          }
        }, 2000)
     console.log('create user', query.sql)
     })
      }); 
      
    }
    
    
exports.editCategory = (categoryDetails) =>{
        
              
    return new Promise((resolve, reject) => {
        setTimeout(() => {
         var query=   pool.query('UPDATE tblcategories SET  ? WHERE idCategory = :idCategory', categoryDetails, (error, results, fields) => {
                
          if (error) {
            reject('Opps!. Something went wrong');
          } else {
            resolve(results);
          }
        }, 2000)
        console.log('update user', query.sql)
        
     })
      }); 
 }
    
 exports.fetchCategory = () =>{
    
     return new Promise((resolve, reject) =>{
        setTimeout(() => {
            pool.query('SELECT * FROM tblcategories' , (error, result) => {
                
          if (error) {
            reject('Opps!. Something went wrong');
          } else {
            resolve(results);
          }
        }, 2000);
     })
      }); 
 }       
   


 exports.addClass = (classDetails) =>{
    console.log('classDetails', classDetails)
       return new Promise((resolve, reject) => {
         setTimeout(() => {
            var query =  pool.query('INSERT INTO tblclass SET ?', classDetails, (error, results, fields) => {    
                 
           if (error) {
             reject('Opps!. Something went wrong');
           } else {
             resolve(results);
           }
         }, 2000)
      console.log('create user', query.sql)
      })
       }); 
       
     }
     
     
 exports.editClass = (classDetails) =>{
         
               
     return new Promise((resolve, reject) => {
         setTimeout(() => {
          var query=   pool.query('UPDATE tblclass SET  ? WHERE idClass = :idClass', classDetails, (error, results, fields) => {
                 
           if (error) {
             reject('Opps!. Something went wrong');
           } else {
             resolve(results);
           }
         }, 2000)
         console.log('update user', query.sql)
         
      })
       }); 
  }
     
  exports.fetchClasses = () =>{
     
      return new Promise((resolve, reject) =>{
         setTimeout(() => {
             pool.query('SELECT * FROM tblclass' , (error, result) => {
                 
           if (error) {
             reject('Opps!. Something went wrong');
           } else {
             resolve(results);
           }
         }, 2000);
      })
       }); 
  }       
     


  exports.addSection = (sectionDetails) =>{
    console.log('sectionDetails', sectionDetails)
       return new Promise((resolve, reject) => {
         setTimeout(() => {
            var query =  pool.query('INSERT INTO tblsection SET ?', sectionDetails, (error, results, fields) => {    
                 
           if (error) {
             reject('Opps!. Something went wrong');
           } else {
             resolve(results);
           }
         }, 2000)
      console.log('create user', query.sql)
      })
       }); 
       
     }
     
     
 exports.editSection = (sectionDetails) =>{
         
               
     return new Promise((resolve, reject) => {
         setTimeout(() => {
          var query=   pool.query('UPDATE tblsection SET  ? WHERE idSection = :idSection', sectionDetails, (error, results, fields) => {
                 
           if (error) {
             reject('Opps!. Something went wrong');
           } else {
             resolve(results);
           }
         }, 2000)
         console.log('update user', query.sql)
         
      })
       }); 
  }
     
  exports.fetchSection = () =>{
     
      return new Promise((resolve, reject) =>{
         setTimeout(() => {
             pool.query('SELECT * FROM tblsection' , (error, result) => {
                 
           if (error) {
             reject('Opps!. Something went wrong');
           } else {
             resolve(results);
           }
         }, 2000);
      })
       }); 
  }       
       
 exports.addSubjectType = (subjectTypeDetails) =>{
    console.log('subjectTypeDetails', subjectTypeDetails)
       return new Promise((resolve, reject) => {
         setTimeout(() => {
            var query =  pool.query('INSERT INTO tblsubjecttype SET ?', subjectTypeDetails, (error, results, fields) => {    
                 
           if (error) {
             reject('Opps!. Something went wrong');
           } else {
             resolve(results);
           }
         }, 2000)
      console.log('create user', query.sql)
      })
       }); 
       
     }
     
     
 exports.editSubjectType = (subjectTypeDetails) =>{
         
               
     return new Promise((resolve, reject) => {
         setTimeout(() => {
          var query=   pool.query('UPDATE tblsubjecttype SET  ? WHERE idSubjectType = :idSubjectType', subjectTypeDetails, (error, results, fields) => {
                 
           if (error) {
             reject('Opps!. Something went wrong');
           } else {
             resolve(results);
           }
         }, 2000)
         console.log('update user', query.sql)
         
      })
       }); 
  }
     
  exports.fetchSubjectTypes = () =>{
     
      return new Promise((resolve, reject) =>{
         setTimeout(() => {
             pool.query('SELECT * FROM tblsubjecttype' , (error, result) => {
                 
           if (error) {
             reject('Opps!. Something went wrong');
           } else {
             resolve(results);
           }
         }, 2000);
      })
       }); 
  }       
 
  

 exports.addSubject = (subjectDetails) =>{
    console.log('subjectDetails', subjectDetails)
       return new Promise((resolve, reject) => {
         setTimeout(() => {
            var query =  pool.query('INSERT INTO tblsubjects SET ?', subjectDetails, (error, results, fields) => {    
                 
           if (error) {
             reject('Opps!. Something went wrong');
           } else {
             resolve(results);
           }
         }, 2000)
      console.log('create user', query.sql)
      })
       }); 
       
     }
     
     
 exports.editSubject = (subjectDetails) =>{
         
               
     return new Promise((resolve, reject) => {
         setTimeout(() => {
          var query=   pool.query('UPDATE tblsubjects SET  ? WHERE idSubject = :idSubject', subjectDetails, (error, results, fields) => {
                 
           if (error) {
             reject('Opps!. Something went wrong');
           } else {
             resolve(results);
           }
         }, 2000)
         console.log('update user', query.sql)
         
      })
       }); 
  }
     
  exports.fetchSubjects = () =>{
     
      return new Promise((resolve, reject) =>{
         setTimeout(() => {
             pool.query('SELECT * FROM tblsubjects' , (error, result) => {
                 
           if (error) {
             reject('Opps!. Something went wrong');
           } else {
             resolve(results);
           }
         }, 2000);
      })
       }); 
  }       
 
    