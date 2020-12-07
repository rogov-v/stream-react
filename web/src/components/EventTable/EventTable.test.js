import { render } from '@testing-library/react';
import { TEST_IDS } from '../../constants/test-ids';
import EventTable from './index';

test('should render EventTable', () => {
  const { getByTestId } = render(<EventTable />);
  expect(getByTestId(TEST_IDS.eventTable)).toBeInTheDocument();
});
