import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { store } from '@/app/store';

import HomePage from './HomePage';

const renderWithProviders = (ui: React.ReactElement) =>
  render(
    <Provider store={store}>
      <MemoryRouter>{ui}</MemoryRouter>
    </Provider>
  );

describe('HomePage', () => {
  it('renders the Hello World heading', () => {
    renderWithProviders(<HomePage />);
    expect(screen.getByRole('heading', { name: /hello, world/i })).toBeInTheDocument();
  });

  it('renders feature list items', () => {
    renderWithProviders(<HomePage />);
    expect(screen.getByText(/vite for lightning-fast builds/i)).toBeInTheDocument();
    expect(screen.getByText(/typescript strict mode/i)).toBeInTheDocument();
  });
});
