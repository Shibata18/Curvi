import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
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

export default function Cursos() {
  const classes = useStyles();
  const [nome_curso, setNomeCurso] = useState('');
  const [instituicao, setInstituicao] = useState('');
  const [ano_conclusao, setAnoConclusao] = useState('');
  const history = useHistory();
  const user_email = localStorage.getItem('email')
  async function handleSubmit(e){
    e.preventDefault()
    try {
      const data = {nome_curso,instituicao,ano_conclusao,user_email};
      const response = await api.post('/course',data,{headers:{email:user_email}})
      console.log(response.data);
      if (response) {
        alert('Dados Adicionado com sucesso')
        let resposta = window.confirm("Deseja Adicionar Mais Cursos?")
        if(resposta){
          window.location.reload()
          history.push('/cursos')
        }else{
          history.push('/socialmedia')
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
          <BusinessCenterIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Preencha o seu curso
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="nomeCurso"
                name="nomeCurso"
                variant="outlined"
                required
                fullWidth
                id="nomeCurso"
                type='text'
                label="Nome do Curso Completo"
                value={nome_curso}
                onChange={e => setNomeCurso(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="instituicao"
                label="instituição de ensino"
                type="text"
                id="instituicao"
                autoComplete="instituicao"
                value={instituicao}
                onChange={e => setInstituicao(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="anoConclusao"
                name="anoConclusao"
                variant="outlined"
                required
                fullWidth
                id="anoConclusao"
                type='text'
                label="Ano de Conclusão"
                placeholder='Dezembro de 2020'
                value={ano_conclusao}
                onChange={e => setAnoConclusao(e.target.value)}
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