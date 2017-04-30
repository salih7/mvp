import React from 'react';

const ListItem = (props) => (
  <div id="row">
    <td>{ props.item.description }</td>
    <td>{ props.item.quantity }</td>
  </div>
)

export default ListItem;