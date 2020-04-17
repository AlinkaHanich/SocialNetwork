import React from 'react';
import s from './Dialogs.module.scss';
import Messages from './Messages/Messages';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {
	debugger
	let state = props.store.getState();
	


	return (
		<div className={s.dialogs}>
			<div className={s.dialogs__items}>
				<DialogItem messagesPage={messagesPage.usersData}  />
			</div>
			<div className={s.messages}>
				<Messages messagesPage={messagesPage} />
				
			</div>
		</div>
	);
};

export default Dialogs;
