import React from 'react';
import contactImg from '../assets/images/contactImg.avif';

const Contact = () => {
	return (
		<div id="contact" className="max-w-[1140px] m-auto w-full p-4 py-14">
			<h2 className="text-center text-gray-700">Send us a message</h2>
			<p className="text-center text-gray-700 py-2">We're just a call Away</p>
			<div className="grid md:grid-cols-2">
				<img
					className="w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]"
					src={contactImg}
					alt=""
				/>
				<form>
					<div className="grid grid-cols-2">
						<input className="border m-2 p-2" type="text" placeholder="First" />
						<input className="border m-2 p-2" type="text" placeholder="Last" />
						<input
							className="border m-2 p-2"
							type="email"
							placeholder="Email"
						/>
						<input
							className="border m-2 p-2"
							type="tel"
							placeholder="Telephone"
						/>
						<textarea
							className="border col-span-2 m-2 p-2"
							cols="30"
							rows="10"
						></textarea>
						<button className="col-span-2 m-2">Submit</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
