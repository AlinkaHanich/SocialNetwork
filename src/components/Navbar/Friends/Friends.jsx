import React from 'react';
import s from './Friends.module.scss';

const Friends = (props) => {
	let usersElements = props.usersData.slice(0, 3).map((user, id) => (
		<div className={s.friendItem}>
			<img className="userLogo" src={user.userLogo} alt="user" />
			<div key={id}>{user.name}</div>
		</div>
	));

	return <div className={s.friends}>{usersElements}</div>;
};

export default Friends;
