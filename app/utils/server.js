/*
	Extract hostname from url
	url = 'https://chat.allincall.in/method'
	hostname = 'open.rocket.chat'
*/
export const extractHostname = (url) => {
	let hostname;

	if (url.indexOf('//') > -1) {
		[,, hostname] = url.split('/');
	} else {
		[hostname] = url.split('/');
	}
	[hostname] = hostname.split(':');
	[hostname] = hostname.split('?');

	return hostname;
};
