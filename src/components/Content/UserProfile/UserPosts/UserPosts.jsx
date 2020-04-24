import React from 'react';
import s from './UserPosts.module.scss';
import Post from './Post/Post';

const UserPosts = (props) => {
	debugger
	let onAddPost = () => {
		props.addPost();
	};
	let onPostValueChange = (e) => {
		let innerPost = e.target.value;

		props.updatePostValue(innerPost);
	};
	return (
		<div className={s.posts}>
			<textarea
				onChange={onPostValueChange}
				value={props.postValue}
				placeholder="What is on your mind?"
			/>
			<button onClick={onAddPost}>Add post</button>
			<Post postData={props.postData} />
		</div>
	);
};

export default UserPosts;
