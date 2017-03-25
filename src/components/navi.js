import React from 'react'

class Navi extends React.Component{

	render () {
		return(
			<div className='navi'>
				<a href='#aboutme'>About Me</a>
				<a href='#projects'>Project</a>
				<a href='#contactme'>Contact Me</a>
			</div>
		);
	}
}

export default Navi;