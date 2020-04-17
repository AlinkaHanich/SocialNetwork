import React from 'react';
import s from './UserPhoto.module.scss';

const UserPhoto = () => {
	return (
		<div className="user">
			<img className={s.user__photo} src="https://i.ya-webdesign.com/images/user-avatar-png-7.png" alt="user" />
		</div>
	);
};

export default UserPhoto;
