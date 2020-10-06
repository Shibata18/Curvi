import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import ErrorIcon from '@material-ui/icons/Error';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Logo from '../../assets/logo.jpg'
import { Link } from 'react-router-dom';
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <a color="inherit" href="https://cvpath.herokuapp.com/">
                CVPATH
      </a>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    image: {
        width: '80%',
        height: '80%'
    },
    text: {
        color: "#319a9b",
    },
    link: {
        textDecoration: 'none'
    }
}));

export default function SignUp() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <img src={Logo} alt='logo' className={classes.image} />
                <Typography component="h1" variant="h5" className={classes.text}>
                    Olá,
        </Typography>
        <Typography component="h5" variant="h6" color='error' >
                    Infelizmente a rota que foi acessada não existe.
        </Typography>
                <Grid>
                    <Link to='/' className={classes.link}>
                         <Button
                        type="submit"
                        fullWidth
                        variant="outlined"
                        color="primary"
                        startIcon={<ErrorIcon />}
                    >
                        Voltar a página inicial
          </Button></Link>
                </Grid>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}