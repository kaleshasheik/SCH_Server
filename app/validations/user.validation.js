
exports.isUserValid = (userData) =>{
    
   if(userData.userName && userData.userEmailId && userData.userMobileNumber
         && userData.userStatus && userData.userType)
         {
             return true
         }
   else{

    return false
   }      

}

