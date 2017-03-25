import React from 'react'

const me = [
	"My name is ShihYen Hwang. I have a master degree in Computer Science and currently focus on website front-end development.",
	"For the past 2 years, I worked as diving guide. I care about the nature and I want to help people to build a better relationship with the nature. I believe the power of communication and would love to develop any skill as long as it helps us to understand each other.",
	"Dive guiding is the bridge from people to the ocean. The front-end of a website is a bridge from people to the concept behind the website. A data visualization is a bridge from people to data. Being able to connect things is the best thing in the world. And here is my place to collect some of my works and will be updated continually.",
	"I am a self-motivated learner and always love to learn something new. If you have anything to say, welcome to contact me at lucent1090[at]gmail.com."
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