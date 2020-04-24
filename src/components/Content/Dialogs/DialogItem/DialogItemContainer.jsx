import DialogItem from './DialogItem';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({ usersData: state.messagesPage.usersData });

const mapDispatchToProps = (dispatch) => {};

const DialogItemContainer = connect(mapStateToProps, mapDispatchToProps)(DialogItem);
export default DialogItemContainer;
