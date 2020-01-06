import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Hello World',
    };
  }

  render() {
    return (
      <div>
        {this.state.title}
      </div>
    );
  }
}

export default App;
