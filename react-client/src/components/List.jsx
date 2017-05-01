import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <div>
      <img src={props.photoUrl} width="382" height="255" />
    </div>
    <div id="name">
      <h2>Name:   {props.name}</h2>
      <h2>Email:   {props.email}</h2>
      <h2>Current Location:   {props.location}</h2>
      <h2>What I'm doing:   {props.work}</h2>
    </div>
  </div>
)

export default List;