import React, { Component } from 'react';
import MainPage from './MainPage/MainPage'
import FolderPage from './FolderPage/FolderPage'
import NotePage from './NotePage/NotePage'
import { Route, Link } from 'react-router-dom';
import STORE from './STORE';




class App extends Component {
  state = {
    store : STORE,
  }
  render(){
    return (
      <div>
        <header>
          <Link to='/'><h1>NoteFul</h1></Link>
        </header>    
        <nav>
          <Route
              exact path='/'
              component={FolderPage}
          />
        </nav>
        
        <main className='App'>  
          <Route
              exact path='/'
              component={MainPage}
          />

          <Route
              path='/note/:noteId'
              component={NotePage }
          />

        

          
        </main>
      </div>
    );
 }
}

export default App;