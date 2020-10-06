import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import DescriptionIcon from '@material-ui/icons/Description';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Logo from '../../assets/logo.jpg'
import { Link } from 'react-router-dom';
import Copyright from '../components/Copyright';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    image: {
        width: '70%',
        height: '70%'
    },
    text: {
        color: "#319a9b",
    },
    link:{
        textDecoration:'none'
    },
    textos:{
        textAlign:'center',
        alignItems:'center'
    }
}));

export default function LandingPage() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <img src={Logo} alt='logo' className={classes.image} />
                <Typography component="h1" variant="h3" className={classes.text}>
                    Olá,
        </Typography>
        <Typography component="h5" variant="h6" className={classes.textos} >
                   Seja Bem vindo  ao gerador de currículos definitivo.
        </Typography>
        <Typography component="h6" variant="h6"   className={classes.textos}>
            Aqui você pode criar, editar e personalizar o seu currículo de maneira rápida e prática
        </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Link to='/login' className={classes.link}> <Button
                            type="submit"
                            fullWidth
                            variant="outlined"
                            color="primary"
                            startIcon={<MeetingRoomIcon />}
                        >
                            Já tenho Cadastro
          </Button></Link>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Link to='/cadastrar' className={classes.link}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="secondary"
                                startIcon={<DescriptionIcon />}
                            >
                                Fazer Currículo
          </Button>
                        </Link>
                    </Grid>
                </Grid>
            </div>
            <Box mt={5}>
                <Copyright/>
            </Box>
        </Container>
    );
}