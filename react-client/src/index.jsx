import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      input: '',
      items: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/items', 
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  captureInput(e) {
    this.setState({
      input: e.target.value
    })
    console.log('Live typing: ', e.target.value);
  }

  onClickAdd() {
    // $.ajax({
    //   type: 'POST',
    //   url: '/',
    //   data: JSON.stringify({ item: this.state.input }),
    //   contentType: 'application/json' 
    // });
    $.post('http://127.0.0.1:3000/', { item: this.state.input });
    console.log('What I typed: ', this.state.input);
  }

  render () {
    return (<div>
      <h1>Item List</h1>
      <input type="text" placeholder="Enter new item" onChange={this.captureInput.bind(this)} />
      <button onClick={this.onClickAdd.bind(this)}>Add to list</button>
      <List items={this.state.items}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

      // <input>Add items</input>
      // 