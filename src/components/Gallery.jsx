import React from 'react';
import gallery1 from '../assets/images/gallery1.avif';
import gallery2 from '../assets/images/gallery2.avif';
import gallery3 from '../assets/images/gallery3.avif';
import gallery4 from '../assets/images/gallery4.avif';
import gallery5 from '../assets/images/gallery5.avif';

const Gallery = () => {
	return (
		<div id="gallery" className="max-w-[1140px] m-auto w-full px-4 py-16">
			<h2 className="text-center text-gray-700 p-4">Gallery</h2>
			<div className="grid sm:grid-cols-5 gap-4">
				<div className="sm:col-span-3 col-span-2 row-span-2">
					<img className="w-full h-full object-cover" src={gallery1} alt="" />
				</div>
				<div>
					<img className="w-full h-full object-cover" src={gallery2} alt="" />
				</div>
				<div>
					<img className="w-full h-full object-cover" src={gallery3} alt="" />
				</div>
				<div>
					<img className="w-full h-full object-cover" src={gallery4} alt="" />
				</div>
				<div>
					<img className="w-full h-full object-cover" src={gallery5} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Gallery;
