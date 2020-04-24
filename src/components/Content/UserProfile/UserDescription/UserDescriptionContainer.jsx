import {connect} from 'react-redux'
import UserDescription from './UserDescription'

const mapStateToProps = (state) => ({ userDescriptionData: state.profilesPage.userDescriptionData });

const mapDispatchToProps = (dispatch) => {

};
const UserDescriptionContainer = connect(mapStateToProps, mapDispatchToProps)(UserDescription);

export default UserDescriptionContainer;
