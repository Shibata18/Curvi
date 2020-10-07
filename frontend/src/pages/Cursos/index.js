import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
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

export default function Cursos() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [telefone, setTelefone] = useState('');
  const [area_formacao, setArea_Formacao] = useState('');
  const [profissao, setProfissao] = useState('');
  const [date_birth, setDate_birth] = useState('');
  const history = useHistory();

  async function handleSubmit(e){
    e.preventDefault()
    try {
      const data = {email,nome,password,address,telefone,area_formacao,profissao,date_birth};
      const response = await api.post('/user',data)
      console.log(response.data);
      if (response) {
        alert('Cadastrado com sucesso')
        history.push('/cursos')
      }
    } catch (error) {
      console.log(error);
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
          Preencha com os seus Dados
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="nome"
                name="nome"
                variant="outlined"
                required
                fullWidth
                id="nome"
                type='text'
                label="Nome Completo"
                value={nome}
                onChange={e => setNome(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                type='email'
                label="Email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="joel@gmail.com"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="address"
                name="address"
                variant="outlined"
                required
                fullWidth
                id="address"
                type='text'
                label="Endereço Completo"
                value={address}
                onChange={e => setAddress(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="telefone"
                label="Telefone"
                name="telefone"
                autoComplete="telefone"
                value={telefone}
                onChange={e => setTelefone(e.target.value)}
                placeholder='(61) 99039-2134'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="area_formacao"
                label="Área de Formação"
                type="text"
                id="area_formacao"
                autoComplete="area_formacao"
                value={area_formacao}
                onChange={e => setArea_Formacao(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <label>Data de Nascimento</label>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="date_birth"
                type="date"
                id="date_birth"
                autoComplete="date_birth"
                value={date_birth}
                onChange={e => setDate_birth(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="profissao"
                label="Profissão"
                type="text"
                id="profissao"
                autoComplete="profissao"
                value={profissao}
                onChange={e => setProfissao(e.target.value)}
                placeholder="Engenheiro Civil"
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