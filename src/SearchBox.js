import React from 'react';

const searchBox = ({ searchChange }) => {
	return (
		<div className='pa2'>
			<input 
			className='pa3 ba b--green bg-lightest-blue o-70 br3'
			type='search'
			placeholder='Search robots...'
			onChange={searchChange}
			/>
		</div>
	);
}

export default searchBox;