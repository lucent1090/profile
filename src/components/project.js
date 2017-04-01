import React from 'react'
import Scroll from 'react-scroll'

var Element = Scroll.Element;
var scroll  = Scroll.animateScroll;

const projects = [
	{
		title: 'The Color in Carol',
		img: './img/color.png',
		github: 'https://github.com/lucent1090/colorofmovielines',
		demo: 'https://lucent1090.github.io/colorofmovielines/',
		tag: 'Movie'
	},
	{
		title: 'Budget Book',
		img: './img/budget.png',
		github: 'https://github.com/lucent1090/budget',
		demo: 'https://lucent1090.github.io/budget/',
		tag: 'Travel'
	},
	{
		title: 'FB check-in Map',
		img: './img/checkin.png',
		github: 'https://github.com/lucent1090/fb-checkin-map',
		demo: 'https://lucent1090.github.io/fb-checkin-map/',
		tag: 'Map'
	},
	{
		title: 'Sudoku',
		img: './img/sudoku.png',
		github: 'https://github.com/lucent1090/sudoku',
		demo: 'https://lucent1090.github.io/sudoku/',
		tag: 'Sudoku'
	}
];

class Project extends React.Component{
	
	scrollToTop () {
		scroll.scrollToTop();
	}

	render () {
		let showBlocks = projects.map((val, idx) => {
			return (
				<div key={idx} className='block'>
					<div className='project'>
						<a id='link' href={val.demo} target='_blank'>
							<img src={val.img} alt='The Color in Carol' width='300'/>
						</a>
						<div className='title'>{val.title}</div>
						<a href={val.demo} target='_blank'>Demo</a>
						<a href={val.github} target='_blank' >Project Page</a>
					</div>
					<div className='cover'>
						{val.tag}
					</div>
				</div>				
			);
		});

		return(
			<Element name='projects' className='element' id='projects'>
				<a id='return' onClick={this.scrollToTop.bind(this)}>Return</a>
				<h2>Projects</h2>
				{showBlocks}
			</Element>
		);
	}
}

export default Project;