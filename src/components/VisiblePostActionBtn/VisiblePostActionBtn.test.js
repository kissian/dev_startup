import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import VisiblePostActionBtn from './index';

// like, showComment, onToggleLike, onToggleComment,

describe('<VisiblePostActionBtn />', () => {
  let component = null;
  let showComment = false;
  let like = false;
  const onToggleLike = jest.fn();
  const onToggleComment = jest.fn();

  it('+++VisiblePostActionBtn renders', () => {
    component = shallow(
      <VisiblePostActionBtn 
        showComment={showComment}
        like={like}
        onToggleLike={onToggleLike}
        onToggleComment={onToggleComment}
      />
    )
  })
  it('+++VisiblePostActionBtn Snapshot', () => {
    expect(component).toMatchSnapshot();
  })

  describe('+++first Modal Event Handler Test', () => {
    it('+++onToggleLike Click Event(true)', () => {
      const onToggleLikeBtn = component.find('Button').at(0);
      // console.log(onToggleLikeBtn);
      onToggleLikeBtn.simulate('click', {like: true} );
      expect(onToggleLike).toBeCalledWith({like: true});
    })

    it('+++onToggleLike Click Event(false)', () => {
      const onToggleLikeBtn = component.find('Button').at(0);
      onToggleLikeBtn.simulate('click', {like: false});
      expect(onToggleLike).toBeCalledWith({like: false});
    })

    it('+++onToggleComment Click Event(true)', () => {
      const onToggleCommentBtn = component.find('Button').at(1);
      // console.log(onToggleCommentBtn);
      onToggleCommentBtn.simulate('click', {like: true} );
      expect(onToggleComment).toBeCalledWith({like: true});
    })

    it('+++onToggleComment Click Event(false)', () => {
      const onToggleCommentBtn = component.find('Button').at(1);
      onToggleCommentBtn.simulate('click', {like: false});
      expect(onToggleComment).toBeCalledWith({like: false});
    })
  })
})