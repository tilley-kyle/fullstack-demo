import React from 'react';

const NewBug = (props) => (
  <tbody>
  <tr className="bugTile">
    <td><input name="bugName" type="text" placeholder="New Bug" onChange={props.handleInputs}/></td>
    <td><input name="bugDescription" type="text" placeholder="Bug Description" onChange={props.handleInputs}/></td>
    <td><input name="reportedBy" type="text" placeholder="Reported By" onChange={props.handleInputs}/></td>
    <td><input name="creadDate" type="text" placeholder="Created Date" onChange={props.handleInputs}/></td>
    <td><input name="assignedTo" type="text" placeholder="Assigned To" onChange={props.handleInputs}/></td>
    <td>
      <label>Threat Level &nbsp;</label>
        <select name="threatLevel" id="myList" onChange={props.handleInputs}>
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