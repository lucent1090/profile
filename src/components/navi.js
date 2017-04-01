import React from 'react'
import Scroll from 'react-scroll'

var Link = Scroll.Link;

class Navi extends React.Component{

	render () {
		return(
			<div className='navi'>
			
			<Link activeClass="active" 
				  className="scroll" 
				  to="aboutme" 
				  spy={true} 
				  smooth={true} 
				  duration={500}>
				  About Me
			</Link>

			<Link activeClass="active" 
				  className="scroll" 
				  to="projects" 
				  spy={true} 
				  smooth={true} 
				  duration={500}>
				  Project
			</Link>

			<Link activeClass="active" 
				  className="scroll" 
				  to="contactme" 
				  spy={true} 
				  smooth={true} 
				  duration={500}>
				  Contact Me
			</Link>

				
			</div>
		);
	}
}

export default Navi;