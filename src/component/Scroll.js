import React from 'react';

const Scroll=(prpos)=>{
	return(
		<div style={{overflowY:'scroll', border:'1px solid black' , height:'650px' , margin:'10px'}} >
		{prpos.children}
		</div>
		);
}

export default Scroll;