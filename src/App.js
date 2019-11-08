import React, {Component} from 'react';
import PageWrapper from './components/PageWrapper'
import Home from './components/Pages/Home'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PageWrapper>
        <Home/>
      </PageWrapper>
    );    
  }  
}

export default App;
