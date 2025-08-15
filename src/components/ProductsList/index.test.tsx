import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';
import ProductsList from './index';

const renderWithAct = async () => {
  let component;
  await act(async () => {
    component = render(<ProductsList />);
  });
  return component;
};

test('componente ProductsList deve ser renderizado', async () => {
  await renderWithAct();

  expect(screen.getByText('nossos queridinhos estão aqui')).toBeInTheDocument();
});
