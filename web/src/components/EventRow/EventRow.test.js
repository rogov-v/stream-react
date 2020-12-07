import { render } from '@testing-library/react';
import { EventTypes } from '../../constants';
import { TEST_IDS } from '../../constants/test-ids';
import EventRow from './index';

const testProps = {
	event: {
		type: EventTypes.identify,
		traits: {
			email: 'test@test.com',
		},
		receivedAt: '2022-02-02',
	},
};

test('should render EventTable', () => {
	const { getByTestId } = render(
		<table>
			<tbody>
				<EventRow {...testProps} />
			</tbody>
		</table>
	);
	expect(getByTestId(TEST_IDS.eventRow)).toBeInTheDocument();
});

test('render event type', () => {
	const { getByText } = render(
		<table>
			<tbody>
				<EventRow {...testProps} />
			</tbody>
		</table>
	);
	expect(getByText(EventTypes.identify)).toBeInTheDocument();
});

test('render event date', () => {
	const { getByText } = render(
		<table>
			<tbody>
				<EventRow {...testProps} />
			</tbody>
		</table>
	);
	expect(getByText('2022/02/02 03:00:00')).toBeInTheDocument();
});

test('render event email', () => {
	const { getByText } = render(
		<table>
			<tbody>
				<EventRow {...testProps} />
			</tbody>
		</table>
	);
	expect(getByText('test@test.com')).toBeInTheDocument();
});
