import { TEST_IDS } from '../../constants/test-ids';
import { testIds } from '../../utils/test-ids-prop';
import styles from './EventTable.module.css';

const EventTable = ({ children }) => (
	<div {...testIds(TEST_IDS.eventTable)}>
		<table className={styles.table}>
			<tbody>{children}</tbody>
		</table>
	</div>
);

export default EventTable;
