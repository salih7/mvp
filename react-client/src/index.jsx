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
      inputVisible: false,
      isLoggedIn: false,
      isAuthenticatedUser: false
    }
  }

  renderList() {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', window.loggedInEmail);
    var cohortMate = false;
    if(window.loggedInEmail) {
      $.ajax({
        url: '/add-user', 
        success: (data) => {
          this.setState({
            items: data
          });
          this.state.items.forEach(user => {
            if(user.email === window.loggedInEmail) {
              cohortMate = true;
            }
          });
          if(cohortMate) {
            this.setState({ isLoggedIn: true });
            this.state.items.forEach(user => {
              $('#userSelect').append(`<option>${user.name}</option>`);
            });        
          } else {
            alert("You're not in the cohort database. Contact administrator!");
          }
        },
        error: (err) => {
          console.log('err', err);
        }
      });
    } else {
      this.setState({ isLoggedIn: false });
    }
  }


  showInputFields() {
    this.setState({ inputVisible: true});
  }

  onClickUpdate(userInfo) {
    $.post('/', userInfo);
    $.get('/add-user', (data) => {
      this.setState({
        items: data,
        inputVisible: false
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
      if(window.loggedInEmail !== undefined &&
         window.loggedInEmail === selectedUserData.email) {
        this.setState({ isAuthenticatedUser: true });
      } else {
        this.setState({ isAuthenticatedUser: false});
      }
      this.setState({
        name: selectedUserData.name || 'No name set',
        email: selectedUserData.email || 'No email set',
        location: selectedUserData.location || 'No location set',
        work: selectedUserData.work || 'No work set',
        photoUrl: selectedUserData.photoUrl || 'No photo set',
        profileVisibile: true,
        inputVisible: false
      });  
    }
  }

  render () {
    return (
      <div>
        <button id="start" onClick={this.renderList.bind(this)}>Click After Login</button>
        {
          this.state.isLoggedIn
            ? <div id="users">
                <select id="userSelect" onChange={this.selectUser.bind(this)}>
                  <option>Select user...</option>
                  <option>Add new user...</option>
                </select>
              </div>
            : null
        }
        <div>
          {
            this.state.isAuthenticatedUser
            ? <button className="update" onClick={this.showInputFields.bind(this)}>Update Profile</button>
            : null
          }
        </div>
        <div>
          { 
            this.state.inputVisible
              ? <UserForm onClickUpdate={this.onClickUpdate.bind(this)} updateName={this.state.name} />
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