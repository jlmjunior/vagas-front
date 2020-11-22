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

const Login = (props) => {
  const classes = useStyles()

  const {setLoading} = React.useContext(ThemeContext)
  const {setUserConfig} = React.useContext(ThemeContext)

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const logar = async () => {
    props.onClose()
    setLoading(true)
    let response = await Api.Auth(username, password)

    console.log(response)
    setLoading(false)

    if (response === 200) {
      setUserConfig(JSON.parse(localStorage.getItem('userconfig')))
    } else if (response === 401) {
      props.setError('Usuário ou senha incorreto')
      props.setAlert(true)
    }
  }

  return (
    <div>
      <DialogTitle id="form-dialog-title">Entrar</DialogTitle>
      <div className={classes.simulatedDialogContent}>
        <DialogContentText className={classes.textArea}>
          To subscribe to this website, please enter your email address here. We will send updates
          occasionally.
        </DialogContentText>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              autoFocus
              id="user"
              label="Username"
              type="email"
              fullWidth
              onChange={ (e) => setUsername(e.target.value) }
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              id="pass"
              label="Senha"
              type="password"
              fullWidth
              onChange={ (e) => setPassword(e.target.value) }
            />
          </Grid>
        </Grid>  
      </div>
      <DialogActions>
        <Button onClick={() => props.onClose()} color="primary">
          Cancel
        </Button>
        <Button onClick={() => logar()} color="primary">
          Entrar
        </Button>
      </DialogActions>
    </div>
  )
}

export default Login
