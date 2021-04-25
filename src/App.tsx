import { Container } from '@material-ui/core'
import React from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import {Members} from './components/Pages/Members'
import { Header } from './components/Header'
import { routes } from './routes.config'

const App = () => {
  console.log('rerender')
  return (
    <div>
      <Header />
      <Container>
        <Switch>
          <Route exact path={routes.members.path} component={Members} />
        </Switch>
      </Container>
    </div>
  )
}

export default App
