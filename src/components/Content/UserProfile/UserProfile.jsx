import React from 'react';
import UserPhoto from './UserPhoto/UserPhoto';
import UserDescriptionContainer from './UserDescription/UserDescriptionContainer';
import UserPostsContainer from './UserPosts/UserPostsContainer';

const UserProfile = () => {
	return (
		<div>
			<UserPhoto />
			<UserDescriptionContainer  />
			<UserPostsContainer  />
		</div>
	);
};

export default UserProfile;
