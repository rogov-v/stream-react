import { render } from '@testing-library/react';
import { TEST_IDS } from '../../constants/test-ids';
import FilterInput from './index';

test('should render FilterInput', () => {
  const { getByTestId } = render(<FilterInput />);
  expect(getByTestId(TEST_IDS.filterInput)).toBeInTheDocument();
});
