import { connect } from 'react-redux';
import { actionCreators as userAction } from 'redux/modules/user';
import Container from './container';

const mapStateToProps = state => {
  const { user } = state;
  return {
    user,
  }
}


const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => {
    dispatch(userAction.logout());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);