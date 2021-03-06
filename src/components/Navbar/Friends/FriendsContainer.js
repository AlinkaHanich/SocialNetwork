import Friends from './Friends';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({ usersData: state.messagesPage.usersData });

const mapDispatchToProps = (dispatch) => {};
const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;
