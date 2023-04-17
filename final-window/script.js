const btn1 = document.getElementById('btn1');

if (!btn1) {
	throw new Error('No button found');
}

/*
* This can be defined by MSL
* need to send this to parent window and request for permission
* then return success or failure to MSL
* */
const constraints = {
	video: true
}

btn1.addEventListener('click', () => {
	if (navigator?.mediaDevices && navigator.mediaDevices?.getUserMedia) {
		navigator.mediaDevices.getUserMedia(constraints)
			.then((stream) => {
				console.log('Stream:', stream);
			})
			.catch((err) => {
				console.error('Error:', err);
			});
	} else {
		console.error('This browser does not support getUserMedia API');
	}
});

window.addEventListener('message', (event) => {
	if (event.origin === 'http://127.0.0.1:5501') {
		console.log('Message received:', event.data, event.origin);

		event.source.postMessage(constraints, event.origin);
	}
});
