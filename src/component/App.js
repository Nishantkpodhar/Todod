import React, { Component } from 'react';
import Modals from './modal/Modal';
import TopNav from './modal/TopNav';
import TodoLists from './todo/Todos';
import './App.css'


class App extends Component {


  render() {
 
    return (
      <div className="App" style={{marginTop:'10px'}}>
        <div className="container">
         <div className="row">
           <div className="col-md-7 m-auto">
           <TopNav/>
            <Modals/>
            <TodoLists/>
           </div>
         </div>
        </div>
      </div>
    );
  }
}



export default App;