import { Box } from '@material-ui/core'
import React from 'react'
import { Typography, makeStyles, Button, Grid, Container } from '@material-ui/core'
import Layout from '../corpo/Layout'
import { ThemeContext } from '../../context/GlobalContext'
import Carregamento from './Carregamento'
import ReactDOM from 'react-dom';

const useStyles = makeStyles(theme => ({
  fontCustom: {
    fontWeight: 900,
    fontSize: '1.8em',
    marginBottom: '10px',
    letterSpacing: '0.1em',
  },
  fontSub: {
    fontWeight: 200,
    fontSize: '1.3em',
    marginBottom: '50px',
    letterSpacing: '0.08em',
  },
  buttonCustom: {
    padding: '8px 25px',
    fontSize: '1.1em',
  },
  master: {
    marginTop: theme.spacing(4),
  },
  boxCustom: {
    padding: '20px',
  },
}))

const Cartao = (props) => {
  const classes = useStyles()
  return (
    <div>
      <Box>
        Teste
      </Box>
    </div>
  )
}

export default Cartao
