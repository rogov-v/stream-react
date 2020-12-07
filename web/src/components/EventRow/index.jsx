import { format } from 'date-fns';
import styles from './EventRow.module.css';
import { EventTypes } from '../../constants';
import { testIds } from '../../utils/test-ids-prop';
import { TEST_IDS } from '../../constants/test-ids';

const getContentByType = (event) => {
	switch (event.type) {
		case EventTypes.identify:
			return event.traits.email;
		case EventTypes.page:
			return event.properties.path;
		case EventTypes.track:
			return event.event;
		default:
			return undefined;
	}
};

const EventRow = ({ event = {} }) => (
	<tr className={styles.container} {...testIds(TEST_IDS.eventRow)}>
		<td className={styles.td}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				x='0px'
				y='0px'
				width='17'
				height='17'
				viewBox='0 0 172 172'
				style={{ fill: '#000000' }}
			>
				<g
					fill='none'
					fillRule='nonzero'
					stroke='none'
					strokeWidth='1'
					strokeLinecap='butt'
					strokeLinejoin='miter'
					strokeMiterlimit='10'
					strokeDasharray=''
					strokeDashoffset='0'
					fontFamily='none'
					fontWeight='none'
					fontSize='none'
					textAnchor='none'
					style={{ mixBlendMode: 'normal' }}
				>
					<path d='M0,172v-172h172v172z' fill='none'></path>
					<g>
						<path
							d='M86,165.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55z'
							fill='#2b6eca'
						></path>
						<path
							d='M86,8.6c42.6775,0 77.4,34.7225 77.4,77.4c0,42.6775 -34.7225,77.4 -77.4,77.4c-42.6775,0 -77.4,-34.7225 -77.4,-77.4c0,-42.6775 34.7225,-77.4 77.4,-77.4M86,4.3c-45.1199,0 -81.7,36.5801 -81.7,81.7c0,45.1199 36.5801,81.7 81.7,81.7c45.1199,0 81.7,-36.5801 81.7,-81.7c0,-45.1199 -36.5801,-81.7 -81.7,-81.7z'
							fill='#2b6eca'
						></path>
						<g fill='#ffffff'>
							<path d='M68.9075,120.486l-29.7001,-29.7001l9.1246,-9.1203l20.5755,20.5755l51.9999,-51.9999l9.1246,9.1203z'></path>
						</g>
					</g>
				</g>
			</svg>
		</td>
		<td className={styles.td}>{event.type}</td>
		<td className={styles.td}>{getContentByType(event)}</td>
		<td className={styles.td}>{format(new Date(event.receivedAt), 'yyyy/MM/dd kk:mm:ss')}</td>
	</tr>
);

export default EventRow;
