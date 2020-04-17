import React from 'react';

import {addPostActionCreator, addNewPostValueActionCreator} from '../../../../redux/reducers/profilesPageReducer'
import UserPosts from './UserPosts'

const UserPostsContainer = (props) => {
	debugger;
	let state = props.store.getState();
	console.log(state, 'state')

	let addPost = () => {
		props.store.dispatch(addPostActionCreator());
	};
	let updatePostValue = (post) => {
		

		props.store.dispatch(addNewPostValueActionCreator(post));
	};
	return (
		<UserPosts addPost={addPost} updatePostValue={updatePostValue} profilesPage={state.profilesPage} />
	);
};

export default UserPostsContainer;
