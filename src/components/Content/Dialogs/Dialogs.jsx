import React from 'react';
import s from './Dialogs.module.scss';
import DialogItemContainer from './DialogItem/DialogItemContainer';
import MessagesContainer from './Messages/MessagesContainer';

const Dialogs = (props) => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogs__items}>
				<DialogItemContainer />
			</div>
			<div className={s.messages}>
				<MessagesContainer />
			</div>
		</div>
	);
};

export default Dialogs;
