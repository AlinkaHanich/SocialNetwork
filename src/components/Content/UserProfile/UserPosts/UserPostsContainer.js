import { connect } from 'react-redux';
import { addPostActionCreator, addNewPostValueActionCreator } from '../../../../redux/reducers/profilesPageReducer';
import UserPosts from './UserPosts';

const mapStateToProps = (state) => ({ 
	postValue: state.profilesPage.postValue,
	postData: state.profilesPage.postData });

const mapDispatchToProps = (dispatch) => {
	return {
		addPost: () => {
			dispatch(addPostActionCreator());
		},
		updatePostValue: (post) => {
			dispatch(addNewPostValueActionCreator(post));
		}
	};
};
const UserPostsContainer = connect(mapStateToProps, mapDispatchToProps)(UserPosts);

export default UserPostsContainer;
