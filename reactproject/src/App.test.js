import React from 'react';
import { render } from '@testing-library/react';
import AppUser from './AppUser';
import AppService from './AppService';
test('renders learn react link', () => {
  const { getByText } = render(<AppService />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
