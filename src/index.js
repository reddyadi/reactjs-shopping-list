import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends Component {
  render(){
    return(
      <div>
          <div className="jumbotron text-center">
            <h1 className="display-4">Shopping List</h1>
          </div>
          <ul class="list-group">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Morbi leo risus</li>
            <li class="list-group-item">Porta ac consectetur ac</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
          <hr/>
          <form>
            <div className="form-group">
                <input className="form-control" ref="text" type="text"/>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary btn-lg btn-block">Add New item</button>
            </div>
          </form>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
