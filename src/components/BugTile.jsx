import React from 'react';

import '../styles/BugTile.scss';

const BugTile = (props) => (
  <article className="bugTile">
    <section>{props.bugName}</section>
    <section>{props.bugDescription}</section>
    <section>{props.reportedBy}</section>
    <section>{props.createdDate}</section>
    <section>{props.assignedTo}</section>
    <section>{props.threatLevel}</section>
  </article>
);

export default BugTile;
