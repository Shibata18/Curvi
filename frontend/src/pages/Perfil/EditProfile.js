import React, { useState,useEffect } from 'react';
import { Button} from '@material-ui/core';
import api from "../../services/api";

function EditProfile(props) {
  const [form, setValues] = useState({
    nome: '',
    email: '',
    telefone: '',
    password: '',
    ativo: '',
  })
  const emailUser = localStorage.getItem('email');

  const onChange = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const submitFormEdit = async e => {
    e.preventDefault()
    try {
      const response = await api.put(`/user`, {
        nome: form.nome,
        email: form.email,
        telefone: form.telefone,
        password: form.password,
        ativo: form.ativo
      }, { headers: { email: emailUser, } });
      if (response) setTimeout(function () { alert('Atualizado Com sucesso'); window.location.reload() }, 200)
    } catch (error) {
      console.log(error.response.data.error.message);
      let mensagemErro = error.response.data.error.message;
      if (mensagemErro === 'update "users" set "email" = $1, "nome" = $2, "password" = $3, "telefone" = $4, "created_at" = $5, "updated_at" = $6 where "id" = $7 - null value in column "email" violates not-null constraint') {
        alert('Email não pode estar em branco')
      } else if (mensagemErro === 'update "users" set "email" = $1, "nome" = $2, "password" = $3, "telefone" = $4, "created_at" = $5, "updated_at" = $6 where "id" = $7 - null value in column "nome" violates not-null constraint') {
        alert('nome não pode estar em branco')
      } else if (mensagemErro === 'update "users" set "email" = $1, "nome" = $2, "password" = $3, "telefone" = $4, "created_at" = $5, "updated_at" = $6 where "id" = $7 - null value in column "password" violates not-null constraint') {
        alert('Senha não pode estar em branco')
      }
    }

  }

  useEffect(() => {
    if (props.item) {
      const { nome, email, telefone, password,  } = props.item
      setValues({ nome, email, telefone, password,  })
    }
  }, [props.item])
  return (
    <form onSubmit={submitFormEdit}>

      <label htmlFor='nome'>Nome</label>
      <input type='text' name="nome" id="nome" onChange={onChange} value={form.nome === null ? '' : form.nome} required />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" onChange={onChange} value={form.email === null ? '' : form.email} required />
      <label htmlFor="telefone">Telefone</label>
      <input type="text" name="telefone" id="telefone" onChange={onChange} value={form.telefone === null ? '' : form.telefone} placeholder="(11) 12345-1234" required />
      <label htmlFor="password">Senha</label>
      <input type="password" name="password" id="password" onChange={onChange} value={form.password === null ? '' : form.password} required />
      <label htmlFor="ativo">Status</label>
      <Button type='submit' color='secondary' fullWidth variant="contained" style={{ marginTop: 10 }}>Enviar</Button>
    </form>
  )
}

export default EditProfile
