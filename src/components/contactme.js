import React from 'react'
import Scroll from 'react-scroll'

var Element = Scroll.Element;
var scroll  = Scroll.animateScroll;

class ContactMe extends React.Component{
	
	scrollToTop () {
		scroll.scrollToTop();
	}

	render () {
		return(
			<Element name='contactme' className='element' id='contactme'>
				<a id='return' onClick={this.scrollToTop.bind(this)}>Return</a>
				<h2>Find Me</h2>			
				<a id='fb' href='https://www.facebook.com/lucent1090' target='_blank'>
					Facebook
				</a>
				
			</Element>
		);
	}
}

export default ContactMe;