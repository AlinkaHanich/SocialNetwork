import React from 'react';
import { Route } from 'react-router-dom';
import s from './Content.module.scss';
import UserProfile from './UserProfile/UserProfile';
import Dialogs from './Dialogs/Dialogs';

const Content = (props) => {
debugger

	return (
		<main className={s.main__content}>
		
			<Route path="/dialogs" render={()=> <Dialogs  store={props.store} /> }/>
			{/* <Route path="/dialogs" render={()=> <Dialogs messagesPageState={props.state.messagesPage} dispatch={props.dispatch} /> }/> */}
		
			<Route path="/profile" render={()=> <UserProfile  store={props.store}/> } />
		

		</main>
	);
};

export default Content;
