import React from 'react';
import s from './Messages.module.scss';
import { addMessageActionCreator, addNewMessageValueActionCreator} from '../../../../redux/reducers/messagesPageReducer';


const Messages = (props) => {
	let onMessageChange = (e) => {
		let bodyMessage = e.target.value;
		props.dispatch(addNewMessageValueActionCreator(bodyMessage));
	};
	console.log(onMessageChange, 'on message change')

	let addNewMessage = () => {
		props.dispatch(addMessageActionCreator());
	};

	return (
		<div className={s.messages}>
			<div className={s.usersMessages}>
				{props.messagesPageState.messagesData.map((item, id) => (
					<div className={s.message} key={item.id}>
						<img className="userLogo" src={item.userLogo} alt="user" />
						{item.message}
					</div>
				))}
			</div>
			<div className={s.receivedMessages}>
				{props.messagesPageState.receivedMessagesData.map((item, id) => (
					<div className={s.message} key={item.id}>
						<img className="userLogo" src={item.userLogo} alt="user" />
						{item.message}
					</div>
				))}
			</div>
			<div>
				<textarea onChange={onMessageChange} value={props.messagesPageState.messagesTextareaValue.message} placeholder='Enter your message' />
				<button onClick={addNewMessage}>Send message</button>
			</div>
		</div>
	);
};
export default Messages;
