import React from 'react';
import { makeStyles }  from '@material-ui/styles';

import Header from './header';
import Registration from './registration';
import Footer from './footer';

// .Header { grid-area: Header; }

// .Registration { grid-area: Registration; }

// .White-Space { grid-area: White-Space; }

// .Footer { grid-area: Footer; }


const styles = makeStyles({
"container": {
    "display": "grid",
    "grid-template-columns": "15fr 5fr",
    "grid-template-rows": "1fr 8fr 1fr",
    "gap": "1px 1px",
    "grid-template-areas": ' "Header Header" "White-Space Registration" "Footer Footer" '
},
"Header" :{
    "grid-area": "Header",
    // "border": "solid 1px black",
    height: "10vh"
},
"Registration": {
    "grid-area": "Registration",
    // "border": "solid 1px black",
    height: "80vh"
},
"Footer" : {
    "grid-area": "Footer",
    // "border": "solid 1px black",
    height: "10vh"
}

});

function Login () {

    const classes = styles();

    return(
        <div className={classes["container"]}>
            <div className={classes["Header"]}>
                <Header />
            </div>
            <div className={classes["Registration"]}>
                <Registration />
            </div>
            <div className={classes["Footer"]}>
                <Footer />
            </div>
        </div>
    );
};

export default Login;