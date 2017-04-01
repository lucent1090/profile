import React from 'react'
import ReactDOM from 'react-dom'
import Scroll from 'react-scroll'
import Intro from './components/intro'
import Navi from './components/navi'
import AboutMe from './components/aboutme'
import Project from './components/project'
import ContactMe from './components/contactme'

var Events     = Scroll.Events;
var scrollSpy  = Scroll.scrollSpy;

class Main extends React.Component{
	
	componentDidMount () {
		Events.scrollEvent.register('begin', function() {
	      // console.log("begin", arguments);
	    });

	    Events.scrollEvent.register('end', function() {
	      // console.log("end", arguments);
	    });

	    scrollSpy.update();
	}

	componentWillUnmount () {
		Events.scrollEvent.remove('begin');
    	Events.scrollEvent.remove('end');
	}

	render () {
		return(
			<div id='app'>
				<Intro />
				<Navi />
				<Project />
				<AboutMe />
				<ContactMe />
			</div>
		);
	}
}

ReactDOM.render(<Main />, document.getElementById('main'));