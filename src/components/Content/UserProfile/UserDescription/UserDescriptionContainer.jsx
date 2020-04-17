import React from 'react';
import UserDescription from './UserDescription'

const UserDescriptionContainer = (props) => {
	debugger
	let state = props.store.getState()
	let userDescriptionData = state.profilesPage.userDescriptionData;
console.log(userDescriptionData, 'user')
	return (
 		<UserDescription userDescriptionData={userDescriptionData}/>
	);
};

export default UserDescriptionContainer;
