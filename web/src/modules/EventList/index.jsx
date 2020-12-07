import useEventStream from '../../hooks/useEventStream';
import ErrorMessage from '../../components/ErrorMessage';
import Header from '../../components/Header';
import ToggleButton from '../../components/ToggleButton';
import FilterInput from '../../components/FilterInput';
import EventRow from '../../components/EventRow';
import EventTable from '../../components/EventTable';
import { testIds } from '../../utils/test-ids-prop';
import { TEST_IDS } from '../../constants/test-ids';

const EventList = () => {
	const { error, isStreamActive, toggleStream, updateFilter, filteredEvents } = useEventStream();
console.log({useEventStream});
	return (
		<div {...testIds(TEST_IDS.eventList)}>
			<Header>
				<ToggleButton
					enabledText={'Live'}
					disabledText={'Pause'}
					activeDefault={isStreamActive}
					onClick={toggleStream}
				/>
				<FilterInput onChange={updateFilter} />
			</Header>
			{error && <ErrorMessage error={error} />}
			<EventTable>
				{filteredEvents.map((event, i) => (
					<EventRow key={`${i}-${event.messageId}`} event={event} />
				))}
			</EventTable>
		</div>
	);
};

export default EventList;
