import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onbtnSubmit}) =>{
	return(
		<div>
		  <p className='f3 white'>
		  	{'This will detect the faces in your pictures. Give it a try!'}
		  </p>
		  <div className='center'>
		    <div className='bg-black-20 center pa3 br4 shadow-3 form'>
			  	 <input className=' ma3 ba br3 b--grey f4 pa2 w-70 center' type='text' onChange={onInputChange} />
			  	 <button className='ma3 ba br3 b--white w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onbtnSubmit}> 
			  	   Detect
			  	 </button>
		  	</div> 
		  </div>
		</div>
		);
}

export default ImageLinkForm;