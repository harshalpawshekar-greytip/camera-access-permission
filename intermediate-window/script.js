const iFrame = document.getElementById('final-window');

if (!iFrame) {
	throw new Error('No iframe found');
}
const listen = () => {
	iFrame.contentWindow.postMessage('hi from intermediate window', 'http://127.0.0.1:5502');
};

window.addEventListener('message', (event) => {
	if (event.origin === 'http://127.0.0.1:5502' || event.origin === 'http://127.0.0.1:5500') {
		console.log('Message received:', event.data, event.origin);
	}
})
