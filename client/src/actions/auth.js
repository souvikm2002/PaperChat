import * as api from '../api/index.js';
import swal from 'sweetalert';

export const signin=(formData, history)=> async (dispatch) => {
    try {
    
        const {data}= await api.signIn(formData);

        dispatch({type: 'AUTH', data});
        
        history.push('/');

        swal("Congratulations!", "You signed in  successfully", "success");
        /*alert('Successfully signed in');*/
    } catch (error) {
        console.log(error);
        swal("Sign In failed!", "Incorrect password / No account in database", "error");
        /*alert('Incorrect password / No account in database');*/
    }
};

export const signup=(formData, history)=> async (dispatch) => {
    try {

        const {data}= await api.signUp(formData);

        dispatch({type: 'AUTH', data});
        
        history.push('/');

        swal("Welcome!", "Account created successfully", "success");
        /*alert('Account created successfully');*/
    } catch (error) {
        console.log(error);
        swal("Something went wrong!", "Password mismatch / E-mail already registered.", "error");
        /*alert('Password mismatch / E-mail already registered.');*/
    }
};