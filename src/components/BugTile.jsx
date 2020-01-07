import React from 'react';

const BugTile = (props) => (
  <tr className="bugTile">
    <td>{props.bugName}</td>
    <td>{props.bugDescription}</td>
    <td>{props.reportedBy}</td>
    <td>{props.createdDate}</td>
    <td>{props.assignedTo}</td>
    <td>{props.threatLevel}</td>
  </tr>
);

export default BugTile;
