import React from 'react'

class Navigation extends React.Component{
	render () {
		return(
			<div className='navi'>
				<button>About Me</button>
				<button>Projects</button>
				<button>Resume</button>
			</div>
		);
	}
}

export default Navigation;