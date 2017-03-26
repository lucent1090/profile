import React from 'react'

const me = [
	"My name is ShihYen Hwang. I have a master degree in Computer Science and currently focus on website front-end development.",
	"For the past 2 years, I worked as diving guide. I care about the nature and I love to see people having a better relationship with the nature. I believe the power of communication and would love to develop any skill as long as it helps us to understand each other.",
	"For me, dive guiding is the bridge from people to the ocean. The front-end of a website is a bridge from people to the concept behind the website. A data visualization is a bridge from people to data. These things make all my life, diving, coding and designing. So here is my place to collect some of my works and will be updated continually.",
	"If you have anything to say, welcome to contact me at lucent1090@gmail.com."
];

class AboutMe extends React.Component{

	render () {
		let show = me.map((val, idx) => {
			return (
				<p key={idx}>{val}</p>
			);
		});
		return(
			<div id='aboutme'>
				<a id='return' href='#app'>Return</a>
				{show}
			</div>
		);
	}
}

export default AboutMe;