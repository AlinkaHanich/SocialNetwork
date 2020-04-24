import React from 'react';
import s from './Messages.module.scss';
import UserLogo from '../../../UserLogo/UserLogo'

const Messages = (props) => {
	debugger;
	let onMessageChange = (e) => {
		let bodyMessage = e.target.value;
		props.changeMessage(bodyMessage);
	};
	console.log(onMessageChange, 'on message change');

	let onAddNewMessage = () => {
		props.addNewMessage();
	};

	return (
		<div className={s.messages}>
			<div className={s.usersMessages}>
				{props.messagesData.map((item, id) => (
					<div className={s.message} key={item.id}>
					<UserLogo userLogo={item.userLogo}/>
						
						{item.message}
					</div>
				))}
			</div>
			<div className={s.receivedMessages}>
				{props.receivedMessagesData.map((item, id) => (
					<div className={s.message} key={item.id}>
						<img className="userLogo" src={item.userLogo} alt="user" />
						{item.message}
					</div>
				))}
			</div>
			<div>
				<textarea
					onChange={onMessageChange}
					value={props.message}
					placeholder="Enter your message"
				/>
				<button onClick={onAddNewMessage}>Send message</button>
			</div>
		</div>
	);
};
export default Messages;
