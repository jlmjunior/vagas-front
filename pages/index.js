import Head from 'next/head'
import React from 'react'
import { Typography, makeStyles, Button, Grid, Box, Container } from '@material-ui/core'
import Layout from '../componentes/corpo/Layout'
import { ThemeContext } from '../context/GlobalContext'
import Carregamento from '../componentes/all/Carregamento'

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

export default function Home() {
  const classes = useStyles()

  const { loading } = React.useContext(ThemeContext)

  return (
    <div>
      <Head>
        <title>Vagas</title>
      </Head>

      <main>
        <Layout>
          <Carregamento open={loading} />
          <section className="cover">
            <div className="cover-b ">
              <Typography className={classes.fontCustom}>CANDIDATURA TOTALMENTE GRATUITA</Typography>
              <Typography className={classes.fontSub}>ENCONTRE A VAGA IDEAL PARA VOCÊ.</Typography>
              <Button variant="contained" className={classes.buttonCustom} color="primary">Buscar</Button>
            </div>
          </section>
          <section className={classes.master}>
            <Container>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                  <Box className={classes.boxCustom} boxShadow={1}>
                    <Typography color="primary" variant="h6">Encontre um emprego</Typography>
                    <p>Encontre as melhores oportunidades.</p>
                    <Box align="right">
                      <Button variant="outlined" color="primary">BUSCAR VAGA</Button>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={12} md={6}>
                  <Box className={classes.boxCustom} boxShadow={1}>
                    <Typography color="primary" variant="h6">Anuncie uma vaga</Typography>
                    <p>Começe seu recrutamento de forma rápida.</p>
                    <Box align="right">
                      <Button variant="outlined" color="primary">CADASTRAR EMPRESA</Button>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </section>
        </Layout>
      </main>
      
    </div>
  )
}
