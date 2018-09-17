import { connect } from 'react-redux';
import Container from './container';

const mapStateToProps = (state) => {
  const { user } = state;
  return {
    user,
  }
}

export default connect(mapStateToProps, null)(Container);
