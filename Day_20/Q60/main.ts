// Self-Running User Profile:

//this profile sets itself up and can share info about the user
let userProfile = (function() {
    let name = "Duaa";                      //the user's details are kept inside
    let age = 23;
    return { displayInfo : function() {     //this part shares the user's details
        console.log(`Name: ${name}, Age : ${age}`);
    }
    };
})();
//asking the profile to tell us about the user 
userProfile.displayInfo();  //it says the user's name and age
// we made a self-setup profile that can talk about the user.