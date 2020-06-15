import React from 'react';
import { makeStyles }  from '@material-ui/styles';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const styles = makeStyles({
"container": {
    display: "flex",
    alignItems: "center",

    "& *:first-child": {
        "flex-basis": "30%",
        textAlign: "left",
        "padding-left": "2%"
    },

    "& *:last-child": {
        "flex-basis": "70%",
        display: "flex",

        "& > div, & > button": {
            maxWidth: "20%"
        }
        
    },


},
});

function Header () {

const classes = styles();
    return(
        <div className={classes.container}>
            <Typography>Logo Here</Typography>
            <form>
                <TextField placeholder="username" />
                <TextField placeholder="password" />
                <Button> Login </Button>
            </form>
        </div>
    );
};

export default Header;