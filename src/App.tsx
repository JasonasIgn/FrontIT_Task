import { Container } from '@material-ui/core'
import React from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import About from './components/about'
import { Header } from './components/Header'

const App = () => {
  console.log('rerender')
  return (
    <div>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/members" component={About} />
        </Switch>
      </Container>
    </div>
  )
}

export default App
