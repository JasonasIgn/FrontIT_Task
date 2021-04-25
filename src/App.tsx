import { Container, createStyles, makeStyles, Theme } from '@material-ui/core'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Members } from './components/Pages/Members'
import { Header } from './components/Header'
import { routes } from './routes.config'

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    container: {
      marginTop: theme.spacing(4),
    },
  })
)

const App = () => {
  const classes = useStyles()
  return (
    <>
      <Header />
      <Container className={classes.container}>
        <Switch>
          <Route exact path={routes.members.path} component={Members} />
        </Switch>
      </Container>
    </>
  )
}

export default App
