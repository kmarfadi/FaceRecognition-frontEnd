import React from 'react';

	const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('signout')} className='mt4 f3 link dim white pa3 pointer mr4'>Sign Out</p>
        </nav>
      );
    } else {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('signin')} className='mt4 f4 link dim white pa2 pointer mr3'>Sign In</p>
          <p onClick={() => onRouteChange('signup')} className='mt4 f4 link dim white pa2 pointer mr5'>Register</p>
        </nav>
      );
    }
}
 
export default Navigation;