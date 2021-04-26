import { Container, createStyles, makeStyles, Theme } from '@material-ui/core'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Members } from './components/Pages/Members'
import { Header } from './components/Header'
import { routes } from './routes.config'
import { Member } from './components/Pages/Member'

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
      <Container className={classes.container} >
        <Switch>
          <Route exact path={routes.members.path} component={Members} />
          <Route exact path={routes.member.path} component={Member} />
        </Switch>
      </Container>
    </>
  )
}

export default App
