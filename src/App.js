import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import BgPar from './components/BgPar';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';


const initialState = {
      input: '',
      imageUrl: null,
      boxes: [],
      route: 'signin',  
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,  
        joined: '',
      }
  }

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: null,
      boxes: [],
      route: 'signin',  // Adjusted route to match signin
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,  // Ensure this is a number
        joined: ''
      }
    };
  }

  loadUser = (data) => {
    this.setState({ 
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: parseInt(data.entries, 10) || 0,  // Ensure entries is a number
        joined: data.joined
      }
    });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  calculateFaceLocation = (regions) => {
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);

    const boxes = regions.map(region => {
      const { left_col, top_row, right_col, bottom_row } = region.region_info.bounding_box;

      return {
        leftCol: left_col * width,
        topRow: top_row * height,
        rightCol: (1 - right_col) * width,
        bottomRow: (1 - bottom_row) * height
      };
    });

    this.setState({ boxes });
  };

onSubmit = () => {
  this.setState({ imageUrl: this.state.input });

  // Sending the image URL to the server
  fetch('https://facerec-server.onrender.com/detect', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ imageUrl: this.state.input })
  })
  .then(response => response.json())
  .then(data => {
    const regions = data.regions;
    if (regions) {
      this.calculateFaceLocation(regions);

      // Increment entries on the server
      fetch('https://facerec-server.onrender.com/image', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: this.state.user.id })
      })
      .then(response => response.json())
      .then(updatedUser => {
        this.setState(prevState => ({
          user: {
            ...prevState.user,
            entries: updatedUser.entries ++,
          }
        }));
      })
      .catch(error => {
        console.error('Error updating entries:', error);
      });
    } else {
      console.warn('No face data detected.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
};






  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState);
    } else if (route === 'home') {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    const { user, imageUrl, boxes, route, isSignedIn } = this.state;

    return (
      <div className="App">
        <BgPar key="background" />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        {route === 'signin'
          ? <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
          : route === 'signup'
            ? <SignUp loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
            : route === 'home'
              ? <div>
                  <Logo />
                  <Rank name={user.name} entries={user.entries} />
                  <ImageLinkForm onInputChange={this.onInputChange} onbtnSubmit={this.onSubmit} />
                  <FaceRecognition imageUrl={imageUrl} boxes={boxes} />
                </div>
              : <SignUp loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        }
      </div>
    );
  }
}

export default App;
