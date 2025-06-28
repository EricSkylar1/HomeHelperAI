import { sendMessage } from 'webext-bridge/content-script';
import { defineContentScript } from '#imports';

export default defineContentScript({
  matches: ['*://*.google.com/*'],
  main: async () => {
    console.log('[Content] Before sendMessage');

    sendToBackground();

  },
});

const sendToBackground = async () => {
    // content script
	const response = await sendMessage('ACTION', { data: 'ping' }, 'background');
	console.log('Got response:', response);

}
