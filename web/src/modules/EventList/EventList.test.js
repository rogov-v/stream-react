import { render } from '@testing-library/react';
import { TEST_IDS } from '../../constants/test-ids';
import EventList from './index';

test('should render EventList', () => {
  const { getByTestId } = render(<EventList />);
  expect(getByTestId(TEST_IDS.eventList)).toBeInTheDocument();
});

test('should render Header', () => {
  const { getByTestId } = render(<EventList />);
  expect(getByTestId(TEST_IDS.header)).toBeInTheDocument();
});

test('should render ToggleButton', () => {
  const { getByTestId } = render(<EventList />);
  expect(getByTestId(TEST_IDS.toggleButton)).toBeInTheDocument();
});

test('should render FilterInput', () => {
  const { getByTestId } = render(<EventList />);
  expect(getByTestId(TEST_IDS.filterInput)).toBeInTheDocument();
});

test('should render EventTable', () => {
  const { getByTestId } = render(<EventList />);
  expect(getByTestId(TEST_IDS.eventTable)).toBeInTheDocument();
});
