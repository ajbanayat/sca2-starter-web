/* eslint-disable linebreak-style */
import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import client from './client'
import Home from './containers/Home/'

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={client}>
            <div className="App">
              {/* <nav>
                <a href="/">Home</a>
                <a href="/Film">Film</a>
              </nav> */}
              <Switch>
                <Route path="/" component={Home} />
                {/* <Route path="/Film" component={Film} /> */}
              </Switch>
            </div>
          </ApolloProvider>
        </ThemeProvider>
      </Router>
    )
  }
}

export default App
