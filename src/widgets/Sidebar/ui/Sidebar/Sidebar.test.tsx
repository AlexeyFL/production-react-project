import { fireEvent, screen } from '@testing-library/react';
import Sidebar from './Sidebar';
import React from 'react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslations/renderWithTranslation';

describe('sidebar', () => {
  test('Test render', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Test toggle', () => {
    renderWithTranslation(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');

    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
