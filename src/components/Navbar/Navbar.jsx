import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.scss';
import FriendsContainer from './Friends/FriendsContainer'

const Navbar = () => {
	debugger

	return (
		<nav className={s.nav}>
			<div className={s.item}>
				<NavLink to="/profile" activeClassName={s.active} className={s.nav__link}>
					Profile
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/dialogs" activeClassName={s.active} className={s.nav__link}>
					Messages
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="#s" activeClassName={s.active} className={s.nav__link}>
					News
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="#s" activeClassName={s.active} className={s.nav__link}>
					Music
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="#s" activeClassName={s.active} className={s.nav__link}>
					Settings
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="#s" activeClassName={s.active} className={s.nav__link}>
					Friends
				</NavLink>
			</div>
			<FriendsContainer />
		
		</nav>
	);
};

export default Navbar;
