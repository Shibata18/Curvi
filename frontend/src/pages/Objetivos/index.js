import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
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
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Objetivo() {
  const classes = useStyles();
  const [objetivo, setObjetivo] = useState('');
  const [habilidades, setHabilidade] = useState('');
  const [hobbies, setHobbies] = useState('');
  const [motivacao, setMotivacao] = useState('');
  const history = useHistory();
  const user_email = localStorage.getItem('email')
  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const data = { objetivo, habilidades, hobbies, motivacao,  user_email };
      const response = await api.post('/objetivo', data, { headers: { email: user_email } })
      console.log(response.data);
      if (response) {
        alert('Adicionado  com sucesso')
        history.push('/resume')
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
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Informe o objetivo que quer conquistar
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
            <TextareaAutosize 
                rowsMin={3}
                cols='55'
                rowsMax={10} 
                placeholder="Escreva o seu Objetivo profissional" 
                autoComplete="objetivo"
                name="objetivo"
                variant="outlined"
                required
                id="objetivo"
                type='text'
                label="objetivo"
                value={objetivo}
                onChange={e => setObjetivo(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="habilidades"
                type='text'
                label="habilidades"
                name="habilidades"
                autoComplete="habilidades"
                value={habilidades}
                onChange={e => setHabilidade(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextareaAutosize 
                rowsMin={3} 
                cols='55'
                rowsMax={10} 
                variant="outlined"
                required
                name="motivacao"
                placeholder="Escreva a sua motivação" 
                label="Motivação"
                type="text"
                id="motivacao"
                value={motivacao}
                onChange={e => setMotivacao(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="hobbies"
                name="hobbies"
                variant="outlined"
                required
                fullWidth
                id="hobbies"
                type='text'
                label="hobbies"
                value={hobbies}
                onChange={e => setHobbies(e.target.value)}
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
            Cadastrar
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}