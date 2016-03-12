import expect from 'expect';
import quoteReducer from './quoteReducer';

describe('quoteReducer', () => {

  function stateBefore() {
    return [
      {
        text: 'Lorem ipsum',
        author: 'Jane Doe',
        id: 1,
        likeCount: 7
      },
      {
        text: 'Ullamco laboris nisi ut aliquip',
        author: 'John Smith',
        id: 2,
        likeCount: 0
      }
    ];
  }

  it('should add quotes by id', () => {

  });
});
