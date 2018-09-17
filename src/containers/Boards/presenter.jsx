import React from 'react';
import PropTypes from 'prop-types';
import BoardForm from 'components/BoardForm';
import BoardItem from 'components/BoardItem';

const BoardContainer = ({
  handleSubmit,
  handleChange,
}) => (
  <div>
    <BoardForm 
    handleSubmit={handleSubmit}
    handleChange={handleChange}
    />
    <BoardItem />
  </div>
)

BoardContainer.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default BoardContainer;