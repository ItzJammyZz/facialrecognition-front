import React, { Component } from 'react';
import ParticlesBg from 'particles-bg'
import Navigation from './components/Navigation/Navigation';
import Clarifai from 'clarifai';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import Particles from 'react-particles-js';
import Signin from './components/Signin/Signin'
import Registration from './components/Registration/Registration';
import './App.css';

const app = new Clarifai.App({
  apiKey: '887893022f414e7da0d611e0e0d5eaf4'
 });

// const particlesOptions = {
//   particles: {
//    number: {
//      value: 130,
//      density: {
//        enable: true,
//        value_area: 900
//      }
//    }
//   }
// }


class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
    }
}
  }

loadUser = (data) => {
  this.setState({user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined

  }})
}



// componentDidMount() {
//   fetch('http://localhost:3000/')
//     .then(response => response.json())
//     .then(console.log)
// }
// This won't be needed anymore but it's used to test backend to frontedn


  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById('inputimage')
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({box: box});
  }

  onInputChange =(event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});


    fetch('https://facialrecognitionfrontend.onrender.com/imageurl', {
             method: 'post',
             headers: {'Content-Type': 'application/json'},
             body: JSON.stringify({
               input: this.state.input
             })
           })



app.models.predict('face-detection', this.state.input)
           .then(response => response.json())
       .then(response => {
         if (response) {

          //  fetch('https://arcane-chamber-79231.herokuapp.com/image', {
            fetch('https://facialrecognitionfrontend.onrender.com/image', {
             method: 'put',
             headers: {'Content-Type': 'application/json'},
             body: JSON.stringify({
               id: this.state.user.id
             })
           })
           .then(response => response.json())
           .then(count => {
             this.setState(Object.assign(this.state.user, {entries: count}))
           })
              .catch(console.log)

       }
        
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log(err))
  }

onRouteChange = (route) => {
  if (route === 'signout') {
    this.setState({isSignedIn: false})
  } else if (route === 'home') {
    this.setState({isSignedIn: true})
  }
  this.setState({route: route});
}


render() {
  const { isSignedIn, imageUrl, route, box } = this.state;
  return (
    <div className="App">
       <ParticlesBg  type="fountain" bg={true} />
      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
      { route === 'home'
        ? <div>
            <Logo />
            <Rank
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition box={box} imageUrl={imageUrl} />
          </div>
          
        : (
           route === 'signin'
           ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
           : <Registration loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          )
      }
    </div>
    
    
  );
}
}


export default App;




//   render() {
//    const  { isSignedIn, imageUrl, route, box } = this.state;
//     return (
//     <div className="App">
//       <Particles className="particles"
//               params={particlesOptions}
//             />

//      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
//      { route === 'home' 
//      ? <div> 
//      <Logo />
//      <Rank />
//      name={this.state.user.name}
//      entries={this.state.user.entries}
//      <ImageLinkForm 
//      onInputChange={this.onInputChange} 
//      onButtonSubmit={this.onButtonSubmit}
//      />
//      <FaceRecognition box={box} imageUrl={imageUrl} />
//     </div>
//      : (
//       route === 'signin' 
//        ?  <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
//        :  <Registration loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
//        )
//      }
//      </div>
//   );
// }
// }

// export default App;
