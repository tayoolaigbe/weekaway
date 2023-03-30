import React from 'react';
import activity1 from '../assets/images/activity1.avif';
import activity2 from '../assets/images/activity2.avif';
import activity3 from '../assets/images/activity3.avif';

const Activities = () => {
	return (
		<div className="max-w-[1140px] m-auto w-full md:flex mt-[-75px]">
			<div className="relative p-4">
				<h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y[-50%] text-white text-2xl font-bold">
					Resorts
				</h3>
				<img
					className="w-full h-full object-cover relative border-4 border-white shadow-lg"
					src={activity1}
					alt=""
				/>
			</div>

			<div className="relative p-4">
				<h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y[-50%] text-white text-2xl font-bold">
					Resorts
				</h3>
				<img
					className="w-full h-full object-cover relative border-4 border-white shadow-lg"
					src={activity2}
					alt=""
				/>
			</div>

			<div className="relative p-4">
				<h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y[-50%] text-white text-2xl font-bold">
					Resorts
				</h3>
				<img
					className="w-full h-full object-cover relative border-4 border-white shadow-lg"
					src={activity3}
					alt=""
				/>
			</div>
		</div>
	);
};

export default Activities;
