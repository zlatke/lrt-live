import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home} from './Home';
import LrtStream from './LrtStream';
import {NoMatch} from './NoMatch';
import {Layout} from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
//import Button from 'react-bootstrap/Button'
 
class App extends Component {
  render () {
    return (
      <React.Fragment>
        <Layout>
        <Router>
        <NavigationBar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/stream" component={LrtStream}/>
            <Route component={NoMatch}/>
          </Switch>
        </Router>
        </Layout>
      </React.Fragment>  
    );
  }
}
export default App;