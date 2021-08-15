import React, {useState, useEffect} from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import useStyles from './styles';
import {createPost, updatePost} from '../../actions/posts'

const Form=({currentId , setCurrentId})=>{
    const [postData,setPostData]= useState({ title: '' , message: '',})
    const post = useSelector((state)=> currentId ? state.posts.find((p)=>p._id===currentId): null);
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

useEffect(()=>{
    if(post) setPostData(post);
},[post])

 const handleSubmit=(e)=>{
    e.preventDefault();

    if(currentId===0){
         dispatch(createPost({...postData, name: user?.result?.name }));
         clear();
    } else{
            
        dispatch(updatePost(currentId, {...postData, name: user?.result?.name }));
        clear();
    }    
}

const clear=()=>{
    setCurrentId(0);     //useState should be set to 0
    setPostData({ title: '' , message: '',});
}

if(!user?.result?.name) {   //if this return get applied, then the final return won't run. It is acting as break point
    return (
        <Paper className={classes.paper}>
            <Typography variant="h6" align="center">
                Please sign in to create post and like other's post
            </Typography>
        </Paper>
    );
}

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6">{currentId ? `Edit "${post.title}"` : 'Create a Post'}</Typography>
             <TextField name="title" variant="outlined" label="Title" fullWidth 
                value={postData.title}
                onChange={(e)=>setPostData({...postData, title : e.target.value})}
             />
             <TextField name="message" variant="outlined" label="Message" fullWidth 
                value={postData.message}
                onChange={(e)=>setPostData({...postData, message: e.target.value})}
             />
             <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            </form>
        </Paper>
    );
}

export default Form;