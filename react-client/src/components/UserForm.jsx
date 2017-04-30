import React from 'react';
import $ from 'jquery';

const UserForm = (props) => (
  <div>
    <div className="row">
      <td>Name:</td> 
      <td><input id="input_name" type="text" placeholder="Enter name" /></td>
    </div>
    <div className="row">
      <td>Email:</td> 
      <td><input id="input_email" type="text" placeholder="Enter email" /></td>
    </div>
    <div className="row">
      <td>Location:</td> 
      <td><input id="input_location" type="text" placeholder="Enter current location" /></td>
    </div>
    <div className="row">
      <td>Photo URL:</td> 
      <td><input id="input_photoUrl" type="text" placeholder="Enter URL for photo" /></td>
    </div>
    <button onClick={() => {
                      var userInfo = { 
                                       name: $('#input_name').val(),
                                       email: $('#input_email').val(),
                                       location: $('#input_location').val(),
                                       photoUrl: $('#input_photoUrl').val()
                                     };
                      props.onClickAdd(userInfo);                                  
                    }}>Add user</button>    
  </div>
)

export default UserForm;