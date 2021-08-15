import React from 'react';
import {Card, CardContent, Button, Typography,Grid, Paper } from '@material-ui/core';
import {Link} from 'react-router-dom';
import useStyles from './styles';

const Profile=()=>{
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));
   
    return (
        <>
        <form className={`${classes.form}`}>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        <Grid item xs={12} sm={12} md={12} >
        <Card className={classes.card}>
        <CardContent>
        <div className={classes.pos}>
            <Typography variant="h6" className={classes.heading} ><div className={classes.tag} > NAME:</div> {user?.result.name}</Typography>
        </div>
        </CardContent>
        </Card></Grid>
        <Grid item xs={12} sm={12} md={12}>
        <Card className={classes.card}>
        <CardContent>
        <div className={classes.pos}>
            <Typography variant="h6" className={classes.heading}><div className={classes.tag} >Email ID: </div> {user?.result.email}</Typography>
        </div>
        </CardContent>
        </Card></Grid></Grid>
        <Button component={Link} to="/" variant="contained" color="secondary" className={classes.submit} fullWidth>Go to home page</Button>
        </form>
        <Paper className={classes.paper}>
            <Typography variant="h6" align="center">
                <div>This site is created and liscensed under PaperChat 2020-2021.</div>
                <div>All your data is secure with us. If you like it:</div>
                <div>Make sure to leave a review!</div>
                <div className="tags"> 
                    <a href="https://www.facebook.com/profile.php?id=100055800737907" target="_blank"><img src="https://img.icons8.com/material-rounded/50/000000/facebook.png"/></a>
                    <a href="https://github.com/souvikm2002" target="_blank"><img src="https://img.icons8.com/material-outlined/50/000000/github.png"/></a>
                    <a href="https://www.instagram.com/souvikm02/" target="_blank"><img src="https://img.icons8.com/ios-glyphs/50/000000/instagram-circle.png"/></a>
                    <a href="https://twitter.com/SouvikM79077653" target="_blank"><img src="https://img.icons8.com/material-outlined/50/000000/twitter.png"/></a>
                    <a href="https://www.linkedin.com/in/souvik-mondal-897a28205/" target="_blank"><img src="https://img.icons8.com/material-outlined/50/000000/linkedin.png"/></a>
                </div>
            </Typography>
        </Paper>
        </>
    )
}

export default Profile;