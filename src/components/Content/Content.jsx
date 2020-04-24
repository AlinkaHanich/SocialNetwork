import React from 'react';
import { Route } from 'react-router-dom';
import s from './Content.module.scss';
import UserProfile from './UserProfile/UserProfile';
import Dialogs from './Dialogs/Dialogs';

const Content = () => {
	

	return (
		<main className={s.main__content}>
			<Route path="/dialogs" render={() => <Dialogs />} />
			<Route path="/profile" render={() => <UserProfile  />} />
		</main>
	);
};

export default Content;
