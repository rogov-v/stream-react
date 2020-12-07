import { render } from '@testing-library/react';
import { TEST_IDS } from '../../constants/test-ids';
import Header from './index';

test('should render Header', () => {
  const { getByTestId } = render(<Header />);
  expect(getByTestId(TEST_IDS.header)).toBeInTheDocument();
});
