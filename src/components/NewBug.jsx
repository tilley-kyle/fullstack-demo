import React from 'react';

const NewBug = (props) => (
  <tbody>
  <tr className="bugTile">
    <td><input name="bug" type="text" placeholder="New Bug" /></td>
    <td><input name="description" type="text" placeholder="Bug Description" /></td>
    <td><input name="reported" type="text" placeholder="Reported By" /></td>
    <td><input name="date" type="text" placeholder="Created Date" /></td>
    <td><input name="assigned" type="text" placeholder="Assigned To" /></td>
    <td>
      <label>Threat Level &nbsp;</label>
        <select name="threat" id="myList" onChange={(e) => props.filterHandler(e.target.value)}>
          <option value="None"></option>
          <option value="Low-Priority">Low-Priority</option>
          <option value="Important">Important</option>
          <option value="Critical">Critical</option>
        </select>
      </td>
  </tr>
</tbody>
);

export default NewBug;