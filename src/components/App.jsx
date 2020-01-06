import React from 'react';
import Nav from './Nav.jsx';
import BugTile from './BugTile.jsx';

import '../styles/App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: 'None',
      bugs: [
        {
          bugName: '#1',
          bugDescription: 'Proptype validation warning for Nav component',
          reportedBy: 'Bailey',
          createdDate: '1/5/2020',
          assignedTo: 'Teddi',
          threatLevel: 'Critical',
        },
      ],
    };
  }

  filterHandler(filter) {
    this.setState({ filter });
  }

  render() {
    return (
      <div>
        <Nav
          filter={this.state.filter}
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
      </div>
    );
  }
}

export default App;
