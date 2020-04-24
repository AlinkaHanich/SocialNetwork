const ADD_NEW_POST_VALUE = 'ADD_NEW_POST_VALUE';
const ADD_POST = 'ADD_POST';

let initialState = {
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
	postValue: ''
};

let profilesPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 5,
				post: state.postValue,
				likes: 0
			};
			return {
				...state,
				postData: [ ...state.postData, newPost ],
				postValue: ''
			};
		case ADD_NEW_POST_VALUE:
			return {
				...state,
				postValue: action.newValue
			};
		default:
			return state;
	}
};
export const addNewPostValueActionCreator = (value) => ({ type: ADD_NEW_POST_VALUE, newValue: value });
export const addPostActionCreator = () => ({ type: ADD_POST });

export default profilesPageReducer;
