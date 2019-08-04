exports.isStudentValid = (studentData) =>{
       
    
       if(studentData.studentFirstName && studentData.studentLastName && studentData.studentAadharNumber 
          && studentData.studentGender && studentData.studentFatherOccupation && studentData.studentPermanentaddress
          && studentData.studentCorrespondenceAddress && studentData.studentNationality && studentData.studentIncomeGroup 
          && studentData.studentBirthPlace && studentData.studentDOB && studentData.studentIsMinority && studentData.studentIsBlind
          && studentData.studentIsPH && studentData.studentIsBPL)
             {
                 return true
             }
       else{
    
        return false
       }      
    
    }


exports.isStudentPreAdmissionValid = (preAdmissionData) =>{
       
    
       if(preAdmissionData.academicYearName && preAdmissionData.studentTotalFee && preAdmissionData.studentInitialFeePaid
           && preAdmissionData.studentPrevAppNo && preAdmissionData.studentPrevWillingClass 
           && preAdmissionData.studentPrevClass )
             {
                 return true
             }
       else{
    
        return false
       }      
    
    }    

exports.isStudentPreInstitutionValid = (preInstitutionData) =>{
       
    
       if(preInstitutionData.prevInstitutionName && preInstitutionData.prevInstitutionAddress
          && preInstitutionData.prevExamPassed && preInstitutionData.prevRegisteredNumber
          && preInstitutionData.prevYearOfPassing)
             {
                 return true
             }
       else{
    
        return false
       }      
    
    }      
    

exports.isStudentAdmissionValid = (admissionData) =>{
       
    
       if(admissionData.studentAdmissionRegistrationNumber && admissionData.studentAdmissionRollNumber
          && admissionData.studentAdmissionFeeConcision && admissionData.studentAdmissionRemainingAmount)
             {
                 return true
             }
       else{
    
        return false
       }      
    
    }      

 