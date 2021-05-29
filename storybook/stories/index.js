/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import { createStore, combineReducers } from 'redux';

import './RoomItem';
import './List';
import './ServerItem';
import './Message';
import './UiKitMessage';
import './UiKitModal';
import './Markdown';
import './HeaderButtons';
import './UnreadBadge';
import '../../app/views/ThreadMessagesView/Item.stories.js';
import './Avatar';
import '../../app/containers/BackgroundContainer/index.stories.js';
import '../../app/containers/RoomHeader/RoomHeader.stories.js';

// Change here to see themed storybook
export const theme = 'light';

const reducers = combineReducers({
	settings: () => ({}),
	login: () => ({
		user: {
			username: 'diego.mello'
		}
	}),
	server: () => ({
		server: 'https://chat.allincall.in',
		version: '3.7.0'
	}),
	share: () => ({
		server: 'https://chat.allincall.in',
		version: '3.7.0',
		settings: {}
	}),
	meteor: () => ({ connected: true }),
	activeUsers: () => ({ abc: { status: 'online', statusText: 'dog' } })
});
export const store = createStore(reducers);
