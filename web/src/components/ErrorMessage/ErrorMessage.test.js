import { render } from '@testing-library/react';
import { TEST_IDS } from '../../constants/test-ids';
import ErrorMessage from './index';

test('should render ErrorMessage', () => {
  const { getByTestId } = render(<ErrorMessage />);
  expect(getByTestId(TEST_IDS.errorMessage)).toBeInTheDocument();
});

test('should render correct error message', () => {
  const { getByText } = render(<ErrorMessage error={'error 1'} />);
  expect(getByText('error 1')).toBeInTheDocument();
});
