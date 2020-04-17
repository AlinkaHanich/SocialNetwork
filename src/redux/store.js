import profilesPageReducer from '../redux/reducers/profilesPageReducer'
import messagesPageReducer from '../redux/reducers/messagesPageReducer'

let store = {
	_state: {
		profilesPage: {
			postData: [
				{ id: 1, post: 'hello, world', likes: 2 },
				{ id: 2, post: 'hello, everyone', likes: 2 },
				{ id: 3, post: 'my name is alina', likes: 2 },
				{ id: 4, post: 'i am from kiev', likes: 3 }
			],
			userDescriptionData: [
				{
					name: 'Alina',
					surname: 'Hanich',
					birthDay: '13th of June',
					city: 'Kiev',
					education: 'Zaporizhian National University',
					webSite: 'alina-ganich.com'
				}
			],
			postValue: { value: '' }
		},
		messagesPage: {
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
		}
	},
	_callSubscriber() {},
	getState() {
		return this._state;
	},

	subscribe(observer) {
		this._callSubscriber = observer;
	},
	dispatch(action) {
		profilesPageReducer(this._state.profilesPage, action);
		messagesPageReducer(this._state.messagesPage, action);
		this._callSubscriber(this._state);
		

	}
};


window.state = store;

export default store;
