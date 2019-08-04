exports.isStaffValid = (staffData) =>{
    
       if(staffData.staffFirstName && staffData.staffLastName && staffData.staffAadharNumber
            && staffData.staffGender && staffData.staffPermanentaddress && staffData.staffDOB
            && staffData.staffCorrespondenceAddress && staffData.staffNationality)
             {
                 return true
             }
       else{
    
        return false
       }      
    
    }
    
    module.exports = isStudentValid

