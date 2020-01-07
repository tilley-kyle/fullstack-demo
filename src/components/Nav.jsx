import React from 'react';

import '../styles/Nav.scss';

const Nav = (props) => (
  <nav>
    <div>Bug #</div>
    <div>Description</div>
    <div>Reported By</div>
    <div>Creation Date</div>
    <div>Assigned To</div>
    <label>Threat Level &nbsp;</label>
    <select id="myList" onChange={(e) => props.filterHandler(e.target.value)}>
      <option value="None"></option>
      <option value="Low-Priority">Low-Priority</option>
      <option value="Important">Important</option>
      <option value="Critical">Critical</option>
    </select>
  </nav>
);

export default Nav;
