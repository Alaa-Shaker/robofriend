import React from 'react';

const SearchBox = ({searchChange}) =>{
	return(
		<div className="seachBox">
		<input 
		className="pa3 b--green bg-lightest-blue dim"
		 type="search" 
		 placeholder="Search Robot"
		 onChange={searchChange} />

		</div>
		);
}

export default SearchBox;