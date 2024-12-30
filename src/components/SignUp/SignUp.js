import React from 'react';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
    };
  }

  // Event handlers for input fields
  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };


 onSubmitSignUp = (event) => {
  event.preventDefault(); // Prevent default form submission behavior
  
  const { email, password, name } = this.state;

  // Client-side validation
  if (!email || !password || !name) {
    alert('All fields are required!');
    return; // Stop further execution if not filled
  }

  // Proceed with API call if validation passes
  fetch('https://facerec-server.onrender.com/signup', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: email,
      password: password,
      name: name,
    }),
  })
    .then((response) => response.json())
    .then((user) => {
      if (user.id) {
        this.props.loadUser(user);
        this.props.onRouteChange('home');
      } else {
        alert('Signup failed! Please try again.'); // Informative alert for failure
      }
    })
    .catch((error) => {
      console.error('Error during sign up:', error);
      alert('An error occurred. Please check your network and try again.');
    });
};


  // Render method
  render() {
    return (
      <div className="center">
        <article
          className="br2 ba b--black-10 mv4 w-100 w-30-m w-50-l mw6 shadow-5 center"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            padding: '1.5rem',
            borderRadius: '10px',
          }}
        >
          <form onSubmit={this.onSubmitSignUp}>
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f3 fw7 white ph0 mh0">Sign Up</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f5 white" htmlFor="name">
                  Name
                </label>
                <input
                  className="pa2 input-reset ba b--white bg-transparent hover-bg-black hover-black w-100"
                  style={{
                    borderRadius: '8px',
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.onNameChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f5 white" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="pa2 input-reset ba b--white bg-transparent hover-bg-black hover-black w-100"
                  style={{
                    borderRadius: '8px',
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f5 white" htmlFor="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba b--white bg-transparent hover-bg-black hover-black w-100"
                  style={{
                    borderRadius: '8px',
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div>
              <input
                className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f5 dib"
                style={{
                  borderRadius: '8px',
                  color: 'white',
                  fontWeight: 'bold',
                }}
                type="submit"
                value="Sign up"
              />
            </div>
            <div className="lh-copy mt3">
              <a
                onClick={() => this.props.onRouteChange('signin')}
                href="#0"
                className="f6 link dim white db"
              >
                Already have an account? Sign In
              </a>
            </div>
          </form>
        </article>
      </div>
    );
  }
}

export default SignUp;
