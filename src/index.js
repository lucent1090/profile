import React from 'react'
import ReactDOM from 'react-dom'
import Intro from './components/intro'
import Navi from './components/navi'
import AboutMe from './components/aboutme'
import Project from './components/project'
import ContactMe from './components/contactme'

class Main extends React.Component{

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