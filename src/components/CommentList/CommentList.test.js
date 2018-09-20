import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import CommentList from './index';
//comments
//id, name, comment, date,

describe('<CommentList />', () => {
  let comments = [
    {
      "id": "0",
      "name": "seb",
      "comment": "hellow comment 1",
      "date": "Thu Jul 26 2018 18:13:31 GMT+0900 (한국 표준시)"
    },
    {
      "id": "1",
      "name": "ian",
      "comment": "hellow comment 2",
      "date": "Thu Jul 26 2018 18:14:31 GMT+0900 (한국 표준시)"
    }
  ]
  const component = shallow(
    <CommentList 
      comments={comments}
    />
  )

  beforeEach(() => {component});

  it("+++ CommentList snapshot", () => {
    expect(component).toMatchSnapshot();
  })
})