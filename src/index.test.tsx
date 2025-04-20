import * as members from '.';

describe('members', () => {
  it('render', () => {
    expect(members).toMatchSnapshot();
  });
});
