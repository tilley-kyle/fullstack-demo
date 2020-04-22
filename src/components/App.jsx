import React from 'react';
import Nav from './Nav.jsx';
import BugTile from './BugTile.jsx';
import exampleData from '../example-data/exampleData';

import '../styles/App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: 'None',
      bugs: exampleData,
      currBugs: [],
    };
    this.filterHandler = this.filterHandler.bind(this);
  }

  filterHandler(filter) {
    this.setState({ filter }, () => {
      if (this.state.filter === 'None') return;
      for (let i = 0; i < this.state.bugs.length; i++) {
        if (this.state.bugs[i].threatLevel === this.state.filter) {
          this.state.currBugs.push(this.state.bugs[i]);
        }
      }
    });
  }

  render() {
    return (
      <div>
        <div>new bug</div>
        <table>
          <Nav
            filterHandler={this.filterHandler}
          />
          {this.state.bugs.map((bug) => (
            <BugTile
              bugName={bug.bugName}
              bugDescription={bug.bugDescription}
              reportedBy={bug.reportedBy}
              createdDate={bug.createdDate}
              assignedTo={bug.assignedTo}
              threatLevel={bug.threatLevel}
              key={bug.bugName}
            />
          ))}
        </table>
      </div>
    );
  }
}

export default App;
