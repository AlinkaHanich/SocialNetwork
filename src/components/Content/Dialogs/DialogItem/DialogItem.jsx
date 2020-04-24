import React from 'react';
import s from './DialogItem.module.scss';
import { NavLink } from 'react-router-dom';
import UserLogo from '../../../UserLogo/UserLogo'

const DialogItem = (props) => {

	let usersElements = props.usersData.map((user) => (

		<div>
			<NavLink to={'/dialogs/' + user.id} className={s.dialogs__item + ' ' + s.active}>
			<UserLogo userLogo={user.userLogo}/>
				{user.name}
			</NavLink>
		</div>
	));

	return <div>{usersElements}</div>;
};
export default DialogItem;
