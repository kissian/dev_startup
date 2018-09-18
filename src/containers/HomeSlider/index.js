import { connect } from 'react-redux';
import Container from './container';

const mapStateToProps = state => {
  const { cards: { properties } } = state;
  return {
    properties
  }
}

export default connect(mapStateToProps, null)(Container);
