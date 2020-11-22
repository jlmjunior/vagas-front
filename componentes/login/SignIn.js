import React from 'react'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeContext } from '../../context/GlobalContext'
import * as Api from '../../pages/api/LoginApi'

const useStyles = makeStyles(() => ({
  simulatedDialogContent: {
    padding: '16px 24px',
  },
  textArea: {
    marginBottom: '20px',
  },
}))

const SignIn = (props) => {
  const classes = useStyles()

  const {setLoading} = React.useContext(ThemeContext)

  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const cadastrar = async () => {
    props.onClose()
    setLoading(true)

    let response = await Api.Register({ 
      username: email, 
      fullName: name,
      password: password, 
      confirmPassword: confirmPassword  
    })

    console.log(response)
    setLoading(false)
  }

  return (
    <div>
      <DialogTitle id="form-dialog-title">Cadastrar</DialogTitle>
      <div className={classes.simulatedDialogContent}>
        <DialogContentText className={classes.textArea}>
          To subscribe to this website, please enter your email address here. We will send updates
          occasionally.
        </DialogContentText>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={12}>
            <TextField
              required
              autoFocus
              id="email"
              label="Email"
              type="email"
              fullWidth
              onChange={ (e) => setEmail(e.target.value) }
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <TextField
              required
              id="fullName"
              label="Nome completo"
              type="text"
              fullWidth
              onChange={ (e) => setName(e.target.value) }
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <TextField
              required
              id="password"
              label="Senha"
              type="password"
              fullWidth
              onChange={ (e) => setPassword(e.target.value) }
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <TextField
              required
              id="confirmPassword"
              label="Confirmar Senha"
              type="password"
              fullWidth
              onChange={ (e) => setConfirmPassword(e.target.value) }
            />
          </Grid>
        </Grid>  
      </div>
      <DialogActions>
        <Button onClick={() => props.onClose()} color="primary">
          Cancel
        </Button>
        <Button onClick={() => cadastrar()} color="primary">
          Entrar
        </Button>
      </DialogActions>
    </div>
  )
}

export default SignIn