import React, {useState} from 'react'
import {Avatar, Button, Paper, Grid, Typography, Container} from '@material-ui/core'
import {GoogleLogin} from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Icon from './icon';
import swal from 'sweetalert';


import LockOutlineIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import Input from './Input';
import {signin, signup} from '../../actions/auth';

const initialState = { firstName: '' , lastName: '' , email: '' , password : '', confirmPassword: ''};

const Auth = () => {
const classes = useStyles();
const [showPassword, setShowPassword] = useState(false); 

const [isSignup , setIsSignup]= useState(false);
const [formData,setFormData] = useState(initialState);
const dispatch = useDispatch();
const history=useHistory();

const handleShowPassword=()=> setShowPassword((prevShowPassword)=> !prevShowPassword);   //true--> false--> true. Hide/Show password

const handleSubmit=(e)=> {
    e.preventDefault();

    if(isSignup){
        dispatch(signup(formData, history));
    } else{
        dispatch(signin(formData, history));
    }
};

const handleChange=(e)=> {
    setFormData({...formData, [e.target.name]: e.target.value});
};

const switchMode=()=> {
    setIsSignup((prevIsSignup)=> !prevIsSignup);   //true--> false--> true. Toggles between signin and signup
    setShowPassword(false);   //this changes as we click switchMode button. Once we click, showPassword toggles between true false
};

const googleSuccess= async (res)=>{
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
        dispatch({type : 'AUTH', data : {result, token}});

        history.push('/');
        swal("Congratulations!", "Sign In successful", "success");
        /*alert("Successfully signed in");*/
        
    } catch (error) {
        console.log(error);
    }
};

const googleFailure=()=>{
    swal("Something went wrong!", "Please try again later.", "warning");
    /*alert("Google sign in unsuccessful. Try again later");*/
};

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlineIcon/>
                </Avatar>
                <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                        isSignup && (
                        <>
                            <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                            <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                        </>
                        )}
                    <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                    <Input name="password" label="Password" handleChange={handleChange} type={ showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
                    { isSignup && <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type="password" />}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <GoogleLogin 
                    clientId="186727809906-pivkgc7tukgq9avt3bf6fueouuc90mm9.apps.googleusercontent.com"  
                    render={(renderProps)=>(
                        <Button 
                        className={classes.googleButton} 
                        color="primary" 
                        fullWidth 
                        onClick={renderProps.onClick} 
                        disabled={renderProps.disabled} 
                        startIcon={<Icon/>} 
                        variant='contained'>Google Sign In
                        </Button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy="single_host_origin"
                    />
                    
                    <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Button onClick={switchMode}>
                                    {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                                </Button>
                            </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default Auth;
