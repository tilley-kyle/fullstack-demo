import React from 'react';

import '../styles/Nav.scss';

const Nav = (props) => (
  <tr>
    <th>Bug #</th>
    <th>Description</th>
    <th>Reported By</th>
    <th>Creation Date</th>
    <th>Assigned To</th>
    <th>
      <label>Threat Level &nbsp;</label>
      <select id="myList" onChange={(e) => props.filterHandler(e.target.value)}>
        <option value="None"></option>
        <option value="Low-Priority">Low-Priority</option>
        <option value="Important">Important</option>
        <option value="Critical">Critical</option>
      </select>
    </th>
  </tr>
);

export default Nav;
