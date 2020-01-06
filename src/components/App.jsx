import React from 'react';
import '../styles/App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: 'None',
      bugs: 'Hello World',
    };
  }

  render() {
    return (
      <div>
        {this.state.bugs}
      </div>
    );
  }
}

export default App;
