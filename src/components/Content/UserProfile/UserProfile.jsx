import React from 'react';
import UserPhoto from './UserPhoto/UserPhoto';
import UserDescriptionContainer from './UserDescription/UserDescriptionContainer';
import UserPostsContainer from './UserPosts/UserPostsContainer';

const UserProfile = (props) => {
	return (
		<div>
			<UserPhoto />
			<UserDescriptionContainer store={props.store} />
			<UserPostsContainer store={props.store} />
		</div>
	);
};

export default UserProfile;
