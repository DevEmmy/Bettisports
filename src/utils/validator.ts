import { toastSuccess, toastError  } from "./toast";

interface SignInProps {
    email: string;
    password: string;
}

interface SignUpProps {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    confirmPassword: string;
}

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
const nameRegex = /^[a-zA-Z]{2,40}$/;

  
export const validateSignIn = ({ email, password } : SignInProps ): boolean => {
  
    if (!emailRegex.test(email)) {
      toastError('Invalid email address');
      return false;
    }
  
    if (!passwordRegex.test(password)) {
      toastError('Invalid password. Password must be at least 8 characters, contain at least one uppercase letter, one lowercase letter, one symbol and one digit');
      return false;
    }
  
    return true;
  };

export const validateSignUp = ({ email, firstName,lastName, password, confirmPassword } : SignUpProps ): boolean => {

    if (confirmPassword != password) {
        toastError('Passwords do not match!');
        return false;
    }
  
    if (!emailRegex.test(email)) {
      toastError('Invalid email address');
      return false;
    }
  
    if (!passwordRegex.test(password)) {
      toastError('Invalid password. Password must be at least 8 characters, contain at least one uppercase letter, one lowercase letter, one symbol and one digit');
      return false;
    }

    if (!nameRegex.test(firstName)) {
        toastError('Invalid Firstname. Firstname must be between 2-40 characters.')
        return false;
    }

    if (!nameRegex.test(lastName)) {
        toastError('Invalid Lastname. Lastname must be between 2-40 characters.')
        return false;
    }
  
    return true;
  };

export const validatePasswordReset = (email : string) : boolean => {
    if (!emailRegex.test(email)) {
        toastError('Invalid email address');
        return false;
    }
    
    return true;
}