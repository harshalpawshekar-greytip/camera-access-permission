const iFrame = document.getElementById('intermediate-window');
const listen = () => {
	iFrame.contentWindow.postMessage('hi from parent window', 'http://127.0.0.1:5501');
};

window.addEventListener('message', (event) => {
	if (event.origin === 'http://127.0.0.1:5501' || event.origin === 'http://127.0.0.1:5502') {
	console.log('Message received:', event.data, event.origin);
	}
})
