import React from 'react';
import Friends from './Friends';

const FriendsContainer = (props) => {
	let state = props.store.getState();

	return <Friends usersData={state.messagesPage.usersData} />;
};

export default FriendsContainer;
