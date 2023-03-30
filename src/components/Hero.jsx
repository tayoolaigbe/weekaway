import React from 'react';
import heroImg from '../assets/images/heroImg.avif';

const Hero = () => {
	return (
		<div className="w-full h-[90vh]">
			<img src={heroImg} alt="" className="w-full h-full object-cover" />
			<div className="max-w-[1140px] m-auto">
				<div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
					<h1 className="font-bold text-4xl">Find Your Special Trip</h1>
					<h2 className="text-4xl py-4 italic">With WeekAway</h2>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
						itaque debitis illo suscipit iusto! Culpa asperiores nisi quo odio
						dicta ullam veritatis. Similique assumenda delectus repellat saepe
						voluptates eius natus.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;
