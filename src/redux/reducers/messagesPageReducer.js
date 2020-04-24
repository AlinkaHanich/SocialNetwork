const ADD_MESSAGE = 'ADD-MESSAGE';
const ADD_NEW_MESSAGE_VALUE = 'ADD-NEW-MESSAGE-VALUE';
let initialState = {
	messagesData: [
		{
			id: 1,
			message: 'Hello',
			userLogo:
				'https://images.vexels.com/media/users/3/135244/isolated/preview/ee21f9d749b69b0a07603c2302083341-usuario-icono-plano-silueta-by-vexels.png'
		},
		{
			id: 2,
			message: 'How are you?',
			userLogo:
				'https://images.vexels.com/media/users/3/135244/isolated/preview/ee21f9d749b69b0a07603c2302083341-usuario-icono-plano-silueta-by-vexels.png'
		}
	],
	messagesTextareaValue: {
		message: '',
		userLogo:
			'https://images.vexels.com/media/users/3/135244/isolated/preview/ee21f9d749b69b0a07603c2302083341-usuario-icono-plano-silueta-by-vexels.png'
	},
	receivedMessagesData: [
		{
			id: 2,
			message: 'I am okay. Whats up?',
			userLogo:
				'https://images.vexels.com/media/users/3/135244/isolated/preview/ee21f9d749b69b0a07603c2302083341-usuario-icono-plano-silueta-by-vexels.png'
		},
		{
			id: 2,
			message: 'How are you?',
			userLogo:
				'https://images.vexels.com/media/users/3/135244/isolated/preview/ee21f9d749b69b0a07603c2302083341-usuario-icono-plano-silueta-by-vexels.png'
		}
	],
	usersData: [
		{
			id: 1,
			name: 'Alina',
			userLogo:
				'https://images.vexels.com/media/users/3/135244/isolated/preview/ee21f9d749b69b0a07603c2302083341-usuario-icono-plano-silueta-by-vexels.png'
		},
		{
			id: 2,
			name: 'Vova',
			userLogo:
				'https://images.vexels.com/media/users/3/135244/isolated/preview/ee21f9d749b69b0a07603c2302083341-usuario-icono-plano-silueta-by-vexels.png'
		},
		{
			id: 3,
			name: 'Luba',
			userLogo:
				'https://images.vexels.com/media/users/3/135244/isolated/preview/ee21f9d749b69b0a07603c2302083341-usuario-icono-plano-silueta-by-vexels.png'
		},
		{
			id: 1,
			name: 'Alina',
			userLogo:
				'https://images.vexels.com/media/users/3/135244/isolated/preview/ee21f9d749b69b0a07603c2302083341-usuario-icono-plano-silueta-by-vexels.png'
		},
		{
			id: 2,
			name: 'Vova',
			userLogo:
				'https://images.vexels.com/media/users/3/135244/isolated/preview/ee21f9d749b69b0a07603c2302083341-usuario-icono-plano-silueta-by-vexels.png'
		},
		{
			id: 3,
			name: 'Luba',
			userLogo:
				'https://images.vexels.com/media/users/3/135244/isolated/preview/ee21f9d749b69b0a07603c2302083341-usuario-icono-plano-silueta-by-vexels.png'
		}
	]
};

let messagesPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE: {
			let newMessage = {
				id: 7,
				message: state.messagesTextareaValue.message,
				userLogo: state.messagesTextareaValue.userLogo
			};
			return {
				...state,
				messagesData: [ ...state.messagesData, newMessage ],
				message: { ...(state.messagesTextareaValue.message = '') }
			};
		}
		case ADD_NEW_MESSAGE_VALUE: {
			let newValue = action.newValue;
			return {
				...state,

				messagesTextareaValue: { ...state.messagesTextareaValue, message: newValue }
			};
		}
		default:
			return state;
	}
};
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const addNewMessageValueActionCreator = (value) => ({ type: ADD_NEW_MESSAGE_VALUE, newValue: value });

export default messagesPageReducer;
