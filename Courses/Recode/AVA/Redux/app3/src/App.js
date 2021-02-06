import React, {Component} from 'react';
import {connect} from 'react-redux';


class App extends Component {
  render() {
    const {newValue} = this.props;
    
    return(
      <div className="App">
        <div className="App" style={{ paddingTop: '10px' }}>
          <h2>App3: React com Redux</h2>
            <input type='text' />
                <button>
                    Enviar
                </button>
            <h3>{newValue}</h3>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});

export default connect(mapStateToProps)(App);
