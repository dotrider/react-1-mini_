import React,{Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
      this.state = {
        friends: [],
        picture: '',
        name: ''
      }
  }


  handleChange = (e) => {
    console.log('handleChange', e.target.value)
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  addFriend = () => {
    console.log('addFriend', this.addFriend)
    const {picture, name} = this.state  
    let newFriend = {
        picture,
        name
      }
    this.state.friends.push(newFriend)  
    this.setState({
      picture: '',
      name: ''
    })

  }

  render(){
    const {picture, name} = this.state
    console.log('friends',this.state.friends)

    const mappedFriends = this.state.friends.map(f => {
      return <div key={f.id}>
          <img src={f.picture}/>
          <span>{f.name}</span>
      </div>
    })

  return (
    <div className="App">
      <label>Picture:</label>
      <input name='picture' value={picture} onChange={this.handleChange}/>

      <label>Name:</label>
      <input  name='name' value={name} onChange={this.handleChange}/>
      <button onClick={this.addFriend}>Add Friend</button>
      <br/>
      {mappedFriends}
    </div>
  );
  }
}

export default App;
