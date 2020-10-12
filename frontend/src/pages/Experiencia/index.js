import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import WorkIcon from '@material-ui/icons/Work';
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

export default function Experiencia() {
  const classes = useStyles();
  const [nome_empresa, setnomeEmpresa] = useState('');
  const [cargo, setcargo] = useState('');
  const [atividade_exercida, setAtividadeExercida] = useState('');
  const [periodo, setPeriodo] = useState('');
  const history = useHistory();
  const user_email = localStorage.getItem('email')
  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const data = { nome_empresa, cargo, atividade_exercida, periodo,  user_email };
      const response = await api.post('/experiencia', data, { headers: { email: user_email } })
      console.log(response.data);
      if (response) {
        alert('Dados Adicionado com sucesso')
        let resposta = window.confirm("Deseja Adicionar Mais Experiências?")
        if(resposta){
          window.location.reload()
          history.push('/experiencia')
        }else{
          history.push('/objetivo')
        }
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
          <WorkIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Informe as suas Experiencias
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="nomeEmpresa"
                name="nomeEmpresa"
                variant="outlined"
                required
                fullWidth
                id="nomeEmpresa"
                type='text'
                label="Nome da Empresa"
                value={nome_empresa}
                onChange={e => setnomeEmpresa(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="cargo"
                label="Escreva o Cargo ocupado"
                type="text"
                id="cargo"
                autoComplete="cargo"
                value={cargo}
                onChange={e => setcargo(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="atividade_exercida"
                label="Qual foi a atividade exercida?"
                type="text"
                id="atividade_exercida"
                autoComplete="atividade_exercida"
                value={atividade_exercida}
                onChange={e => setAtividadeExercida(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="periodo"
                name="periodo"
                variant="outlined"
                required
                fullWidth
                id="periodo"
                type='text'
                label="Periodo de Atuação"
                placeholder='Agosto de 2016 até Março de 2017'
                value={periodo}
                onChange={e => setPeriodo(e.target.value)}
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