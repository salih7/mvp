import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import UserForm from './components/UserForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      email: '',
      location: '',
      work: '',
      photoUrl: '',
      items: [],
      profileVisibile: false,
      inputVisible: false
    }
  }

  componentDidMount() {
    var photoArray = [];
    var photoObj = {};
    $.ajax({
      url: '/add-user', 
      success: (data) => {
        this.setState({
          items: data
        });
        //console.log('Component did mount!!!!!!', this.state.items.length); //consolelog---------------------------------
        this.state.items.forEach(user => {
          $('#userSelect').append(`<option>${user.name}</option>`);
        });       
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  updateInfo(userUpdateInfo) {
    $.post('/', userUpdateInfo);
  }

  onClickAdd(userInfo) {
    // $.ajax({
    //   type: 'POST',
    //   url: '/',
    //   data: { item: this.state.input },
    //   success: () => {
    //     this.setState
    //   } 
    // });
    console.log(userInfo);
    $.post('http://127.0.0.1:3000/', userInfo);
    $('#userSelect').append(`<option>${userInfo.name}</option>`);
    $.get('http://127.0.0.1:3000/add-user', (data) => {
      this.setState({
        items: data
      });
      $('#userSelect').val(userInfo.name);
      this.selectUser();
    });
  }

  selectUser() {
    var selectedUserName = ($('#userSelect').val());
    if(selectedUserName === 'Select user...') {
      this.setState({
        profileVisibile: false,
        inputVisible: false
      });
    } else if(selectedUserName  === 'Add new user...') {
      this.setState({
        profileVisibile: false,
        inputVisible: true
      })
    } else {
      var selectedUserData = this.state.items.filter(user => user.name === selectedUserName)[0];
      this.setState({
        name: selectedUserData.name || 'No name',
        email: selectedUserData.email || 'No email',
        location: selectedUserData.location || 'No location',
        work: selectedUserData.work || 'No work',
        photoUrl: selectedUserData.photoUrl || 'No photo',
        profileVisibile: true,
        inputVisible: false
      });  
    }
  }

  render () {
    return (
      <div>
        <h1>LookMeUp</h1>
        <div className="g-signin2" data-onsuccess="onSignIn">Sign in yo</div>
          {
            function onSignIn(googleUser) {
              // Useful data for your client-side scripts:
              var profile = googleUser.getBasicProfile();
              console.log("ID: " + profile.getId()); // Don't send this directly to your server!
              console.log('Full Name: ' + profile.getName());
              console.log('Given Name: ' + profile.getGivenName());
              console.log('Family Name: ' + profile.getFamilyName());
              console.log("Image URL: " + profile.getImageUrl());
              console.log("Email: " + profile.getEmail());

              // The ID token you need to pass to your backend:
              var id_token = googleUser.getAuthResponse().id_token;
              console.log("ID Token: " + id_token);
            }
          }

        <div id="users">
          <select id="userSelect" onChange={this.selectUser.bind(this)}>
            <option>Select user...</option>
            <option>Add new user...</option>
          </select>
        </div>
        <div>
          { 
            this.state.inputVisible 
              ? <UserForm onClickAdd={this.onClickAdd.bind(this)} />
              : null
          }
        </div>
        <div>
          {
            this.state.profileVisibile
              ? <List items={this.state.items} 
                      name={this.state.name}
                      email={this.state.email}
                      location={this.state.location}
                      work={this.state.work} 
                      photoUrl={this.state.photoUrl}
                /> 
              : null
          }
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));