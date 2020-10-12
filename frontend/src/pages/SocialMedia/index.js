import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from '../components/Copyright';
import api from '../../services/api'
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SocialMedia() {
  const classes = useStyles();
  const [facebook, setFacebook] = useState('');
  const [instagram, setinstagram] = useState('');
  const [whatsapp, setwhatsapp] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [outros, setOutros] = useState('')
  const history = useHistory();
  const user_email = localStorage.getItem('email')
  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const data = { facebook, instagram, whatsapp, linkedin, outros, user_email };
      const response = await api.post('/socialmedia', data, { headers: { email: user_email } })
      console.log(response.data);
      if (response) {
        alert('Dados Adicionados com sucesso')
        history.push('/experiencia')
      }
    } catch (error) {
      console.log(error.response);
    }
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <SupervisorAccountIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Informe as suas Mídias Sociais
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="facebook"
                name="facebook"
                variant="outlined"
                required
                fullWidth
                id="facebook"
                type='text'
                label="Link para o Facebook"
                value={facebook}
                onChange={e => setFacebook(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="instagram"
                label="Link para o Instagram"
                type="text"
                id="instagram"
                autoComplete="instagram"
                value={instagram}
                onChange={e => setinstagram(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="whatsapp"
                label="Link para o Whatsapp"
                type="text"
                id="whatsapp"
                autoComplete="whatsapp"
                value={whatsapp}
                onChange={e => setwhatsapp(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="Linkedin"
                name="Linkedin"
                variant="outlined"
                required
                fullWidth
                id="Linkedin"
                type='text'
                label="Link para o Linkedin"
                value={linkedin}
                onChange={e => setLinkedin(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="outros"
                label="Outros meios de Comunicação"
                type="text"
                id="outros"
                autoComplete="outros"
                value={outros}
                onChange={e => setOutros(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Adicionar
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}