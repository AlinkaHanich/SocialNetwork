import React from 'react';
import s from './DialogItem.module.scss';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
	debugger;

	let usersElements = props.usersData.map((user) => (

		<div>
			<NavLink to={'/dialogs/' + user.id} className={s.dialogs__item + ' ' + s.active}>
				<img className='userLogo' src={user.userLogo} alt="user"/>
				{user.name}
			</NavLink>
		</div>
	));

	return <div>{usersElements}</div>;
};
export default DialogItem;
