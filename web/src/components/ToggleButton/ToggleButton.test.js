import { render } from '@testing-library/react';
import { TEST_IDS } from '../../constants/test-ids';
import ToggleButton from './index';

test('should render ToggleButton', () => {
  const { getByTestId } = render(<ToggleButton />);
  expect(getByTestId(TEST_IDS.toggleButton)).toBeInTheDocument();
});

test('should render enabledText', () => {
  const { getByText } = render(<ToggleButton enabledText="enabledText" />);
  expect(getByText('enabledText')).toBeInTheDocument();
});

test('should render disabledText', () => {
  const { getByText } = render(<ToggleButton disabledText="disabledText" />);
  expect(getByText('disabledText')).toBeInTheDocument();
});
