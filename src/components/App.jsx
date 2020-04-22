import React from 'react';
import Nav from './Nav.jsx';
import BugTile from './BugTile.jsx';
import exampleData from '../example-data/exampleData';
import NewBug from './NewBug.jsx';
import Submit from './Submit.jsx';

import '../styles/App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: 'None',
      bugs: exampleData,
      currBugs: exampleData,
      newBug: {
        bugName: '',
        bugDescription: '',
        reportedBy: '',
        createdDate: '',
        assignedTo: '',
        threatLevel: '',
      }
    };
    this.filterHandler = this.filterHandler.bind(this);
    this.handleInputs = this.handleInputs.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3000')
      .then( data => {
        data = data.json();
      })
  }

  filterHandler(filter) {
    this.setState({ filter }, () => {
      let tempArr = [];
      for (let i = 0; i < this.state.bugs.length; i++) {
        if (this.state.bugs[i].threatLevel === this.state.filter || this.state.filter === 'None') {
          tempArr.push(this.state.bugs[i]);
        }
      }
      this.setState({currBugs: tempArr});
    });
  }

  handleInputs(e) {
    const { newBug } = { ...this.state };
    const currentState = newBug;
    const { name, value } = e.target;
    currentState[name] = value;
    this.setState({ newBug: currentState});
  }

  handleSubmit(e) {
    fetch('http://localhost:3000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.newBug),
    })
  }


  render() {
    return (
      <div>
        <div><Submit handleSubmit={this.handleSubmit}/></div>
        <table>
          <Nav
            filterHandler={this.filterHandler}
          />
          <NewBug handleInputs={this.handleInputs} />
          {this.state.currBugs.map((bug) => (
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
