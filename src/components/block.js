import React from 'react'
import { projects } from './../data/data'

class Block extends React.Component{
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
						<a href={val.github}target='_blank' >Project Page</a>
					</div>
					<div className='cover'>
						{val.tag}
					</div>
				</div>				
			);
		});

		return(
			<div className='blocks'>
				<h2>Projects</h2>
				{showBlocks}
			</div>
		);
	}
}

export default Block;