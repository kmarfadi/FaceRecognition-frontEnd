import React from 'react';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  // Event handlers for input fields
  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  // Submit handler for signing in
  onSubmitSignIn = (event) => {
    event.preventDefault(); // Prevent default form submission

    const { email, password } = this.state;


    // Send data to the server
    fetch('https://facerec-server.onrender.com/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Invalid credentials');
        }
        return response.json();
      })
      .then(data => {
        if (data.id) {
          this.props.loadUser(data); // Load the user into the app
          this.props.onRouteChange('home'); // Redirect to home
        } else {
          alert('Invalid email or password.');
        }
      })
      .catch(error => {
        alert('Error signing in: ' + error.message);
      });
  };

  // Render method
  render() {
    const { email, password } = this.state;

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
          <form onSubmit={this.onSubmitSignIn}>  {/* Use onSubmit here */}
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f3 fw7 white ph0 mh0">Sign In</legend>

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
                  value={email}
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
                  value={password}
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
                value="Sign In"
              />
            </div>

            <div className="lh-copy mt3">
              <a
                onClick={() => this.props.onRouteChange('signup')}
                href="#0"
                className="f6 link dim white db"
              >
                Don't have an account? Sign Up
              </a>
            </div>
          </form>
        </article>
      </div>
    );
  }
}

export default SignIn;
