import { render, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';

describe('sidebar', () => {
  test('test', () => {
    render(<Sidebar />);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
});
