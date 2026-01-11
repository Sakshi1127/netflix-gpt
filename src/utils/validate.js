export const checkValidData = (name,email, password,isSignUpForm)=>{
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    
    if(isSignUpForm){
    if(!name || name.trim().length < 3 ){
        return "Name must be at least 3 characters long.";
    }
    }
    if(!isEmailValid){
        return "Email is not valid.";
    }
    if(!isPasswordValid){
        return "Password must be at least 6 characters long.";
    }

    return null;
}