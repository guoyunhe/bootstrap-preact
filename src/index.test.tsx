import { render, screen } from '@testing-library/preact';
import { PreactBootstrap } from '.';

describe('PreactBootstrap', () => {
  it('render', async () => {
    render(<PreactBootstrap>foobar</PreactBootstrap>);
    await screen.findByText('foobar');
  });
});
