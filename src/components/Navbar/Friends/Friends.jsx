import React from 'react';
import s from './Friends.module.scss';
import UserLogo from '../../UserLogo/UserLogo'

const Friends = (props) => {
	debugger
	let usersElements = props.usersData.slice(0, 3).map((user, id) => (
		<div className={s.friendItem}>
			<UserLogo userLogo={user.userLogo}/>
			<div key={id}>{user.name}</div>
		</div>
	));

	return <div className={s.friends}>{usersElements}</div>;
};

export default Friends;
