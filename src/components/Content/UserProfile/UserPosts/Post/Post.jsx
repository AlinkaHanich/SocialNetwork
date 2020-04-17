import React from 'react';

const Post = (props) => {

	return (
		<div>
			{props.postData.map((item) => (
				<div>
					<div>{item.post}</div>
					<div>{item.likes}</div>
				</div>
			))}
		</div>
	);
};

export default Post;
