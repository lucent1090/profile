import React from 'react'
import ReactDOM from 'react-dom'
import Block from './components/block'
import { me } from './data/data'

class App extends React.Component{

	constructor (props) {
		super(props);
		this.state = {
			show: 'projects'
		};
	}

	handleNavi (content, e) {
		this.setState({show: content});
	}

	render () {
		let show;
		switch( this.state.show )
		{
			case 'projects':
				show = <Block />;
				break;
			case 'aboutme':
				show = me.map((val, idx) => {
					return (
						<p key={idx}>{val}</p>
					);
				});
				break;
			case 'resume':
				show = <embed src='./src/data/SYHwang_Resume_en.pdf' width='500' height='700' />
				break;
			default:
				show = '';
				break;
		}
		return(
			<div className='app'>
				<div className='navi'>
					<button onClick={this.handleNavi.bind(this, 'aboutme')}>About Me</button>
					<button onClick={this.handleNavi.bind(this, 'projects')}>Projects</button>
					<button onClick={this.handleNavi.bind(this, 'resume')}>Resume</button>
				</div>
				{show}
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('main')
);