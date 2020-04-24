import {
	addMessageActionCreator,
	addNewMessageValueActionCreator
} from '../../../../redux/reducers/messagesPageReducer';
import { connect } from 'react-redux';
import Messages from './Messages';

const mapStateToProps = (state) => ({
	messagesData: state.messagesPage.messagesData ,
	receivedMessagesData: state.messagesPage.receivedMessagesData,
	message: state.messagesPage.messagesTextareaValue.message,
	});

const mapDispatchToProps = (dispatch) => {
	return {
		addNewMessage: () => {
			dispatch(addMessageActionCreator());
		},
		changeMessage: (text) => {
			dispatch(addNewMessageValueActionCreator(text));
		}
	};
};
const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);
export default MessagesContainer;
