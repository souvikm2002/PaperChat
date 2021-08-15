import React , {useState, useEffect} from 'react';
import {Link, useHistory, useLocation} from 'react-router-dom';
import {AppBar , Avatar, Button, Toolbar, Typography} from '@material-ui/core'
import Hidden from '@material-ui/core/Hidden';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import UseStyles from './styles';

const Navbar = () => {
    const classes = UseStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const location= useLocation();
    const [user, setUser]=useState(JSON.parse(localStorage.getItem('profile')));

    const logout= ()=> {
        dispatch({type: 'LOGOUT' });

        history.push('/');
        setUser(null);
    };

    useEffect(()=>{
        const token = user?.token;

        if(token){
            const decodedToken = decode(token);

            if(decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    },[location]) 

     return (  
    <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
        <Hidden only={['sm', 'xs']}><Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">PaperChat</Typography></Hidden>
        <Hidden mdUp>{user ? null :  <Avatar component={Link} to="/" src="https://img.icons8.com/fluency/32/000000/old-vmware-logo.png"></Avatar>}</Hidden>
        </div>
        <Toolbar className={classes.toolbar}>
            {user ? (
                <div className={classes.profile}>
                    <Avatar component={Link} to="/profile" className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(1)}</Avatar>
                    <Typography className={classes.userName} variant="h6" >{user.result.name}</Typography>
                    <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                </div>
            ) : (
                <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
            )}
        </Toolbar>

      </AppBar>
    );
};

export default Navbar;
