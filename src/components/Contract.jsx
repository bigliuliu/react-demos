import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

function Contract() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	useEffect(() => {
		emailjs.init("lZo3_0SwmgDYU26LH"); // Replace with your actual Public Key
	}, []);

	const sendMail = async (e) => {
		e.preventDefault();
		
		if (email === '' || name === '' || message === '') {
			alert("Please fill all inputs...");
			return false;
		}

		const params = {
			name: name,
			email: email,
			message: message,
		};

		const serviceID = "service_z5spwih";
		const templateID = "template_exu518l";

		try {
			await emailjs.send(serviceID, templateID, params);
			setName('');
			setEmail('');
			setMessage('');
			alert("Your message sent successfully!!");
		} catch (err) {
			console.log(err);
			alert("Failed to send message. Please try again.");
		}
	};

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-4">Contact Us</h1>
			<form onSubmit={sendMail} className="max-w-lg">
				<div className="mb-4">
					<label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
					<input
						type="text"
						id="fullName"
						value={name}
						onChange={(e) => setName(e.target.value)}
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						required
					/>
				</div>
				<div className="mb-4">
					<label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
					<input
						type="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						required
					/>
				</div>
				<div className="mb-6">
					<label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
					<textarea
						id="message"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
						required
					></textarea>
				</div>
				<div className="flex items-center justify-between">
					<button
						type="submit"
						id="submit-btn"
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					>
						Send Message
					</button>
				</div>
			</form>
		</div>
	);
}

export default Contract;