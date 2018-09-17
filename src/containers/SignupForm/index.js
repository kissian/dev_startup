import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as userActions } from 'redux/modules/user';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        // facebookLogin: access_token => {
        //     dispatch(userActions.facebookLogin(access_token));
        // },
        createAccount: (email, password, firstName, lastName) => {
            dispatch(userActions.createAccount(email, password, firstName, lastName));
        }
    }
}

export default connect(null, mapDispatchToProps)(Container);