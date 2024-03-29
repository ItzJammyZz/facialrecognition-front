import React from 'react'
import './Registration.css'
import axios from 'axios';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password: '',
      name: ''
    }
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }
  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }


  onSubmitSignIn = () =>
  {
    axios.post('https://facialrecognitionapi.onrender.com/register', {
  email: 'jammy@hello.com', // Replace with actual user input
  password: 'yossword', // Replace with actual user input
  name: 'Jamster', // Replace with actual user input
})
.then(response => {
  // Handle the response here, e.g., update the UI or navigate to a new page
  console.log(response);
})
.catch(error => {
  // Handle errors, e.g., display an error message to the user
  console.error(error);
});



  //   try {
  //   fetch('https://facialrecognitionapi.onrender.com/register', {
  //     method: 'post',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify({
  //       email: this.state.email,
  //       password: this.state.password,
  //       name: this.state.name
  //     })
  //   })
  //   .then(response => {
  //     console.log('I am trying to fetch', response);
  //     return response.json()})
  //   .then(user => {
  //     if(user.id) {
  //       this.props.loadUser(user);
  //       this.props.onRouteChange('home');
  //     }
  //   })
  // }
  // catch(err) { console.log('Uh oh, we catch an error here!', err); }
  }


  // onSubmitSignIn = () => {
  //   fetch('https://facialrecognitionapi.onrender.com/register', {
  //     method: 'post',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify({
  //       email: this.state.email,
  //       password: this.state.password,
  //       name: this.state.name
  //     })
  //   })
  //   .then(response => response.json())
  //   .then(user => {
  //     console.log(user)
  //     if(user.id) {
  //       this.props.loadUser(user)
  //       this.props.onRouteChange('home');
  //     }
  //   }) 
  //   .catch((error) => console.log(error))
  // }
  
  render() {
    return (
        <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
  <div className="measure">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f2 fw6 ph0 mh0 center">Register</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
        <input 
        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="text" 
        name="name"  
        id="name" 
        onChange={this.onNameChange}
        />
      </div>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input 
        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="email" 
        name="email-address"  
        id="email-address" 
        onChange={this.onEmailChange}
        />
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input 
        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="password" 
        name="password"  
        id="password" 
        onChange={this.onPasswordChange}
        />
      </div>
    </fieldset>
    <div className="">
      <input
      onClick={this.onSubmitSignIn} 
      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
      type="submit" 
      value="Register" 
      />
    </div>
  </div>
</main>
</article>

    );
  }
}

export default Registration
