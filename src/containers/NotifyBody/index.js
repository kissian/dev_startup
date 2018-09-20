import { connect } from 'react-redux';
import Container from './container';

const mapStateToProps = (state) => {
  const { post: { boards } } = state;
  return {
    boards
  }
}

export default connect(mapStateToProps, null)(Container);