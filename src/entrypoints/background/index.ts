import { onMessage } from 'webext-bridge/background';
import { defineBackground } from '#imports';

export default defineBackground(() => {
	onMessage('ACTION', ({ data }) => {
	console.log('Received:', data);
	return { pong: true }; // returned value resolves promise in content script
	});
});
