import React from 'react';

const NewBug = (props) => (
  <tbody>
  <tr className="bugTile">
    <td><input name="bugName" type="text" placeholder="New Bug" /></td>
    <td><input name="bugDescription" type="text" placeholder="Bug Description" /></td>
    <td><input name="reportedBy" type="text" placeholder="Reported By" /></td>
    <td><input name="creadDate" type="text" placeholder="Created Date" /></td>
    <td><input name="assignedTo" type="text" placeholder="Assigned To" /></td>
    <td>
      <label>Threat Level &nbsp;</label>
        <select name="threatLevel" id="myList" onChange={(e) => props.filterHandler(e.target.value)}>
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