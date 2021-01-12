import React from "react";

const Scroll = (props) => {
	return (
		<div style={{overflowY: 'scroll', border: '1px solid black', height: '430px'}}>
			<br/>
			{props.children}
			<br/>
		</div>
	);
}

export default Scroll;