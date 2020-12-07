import { TEST_IDS } from '../../constants/test-ids';
import { testIds } from '../../utils/test-ids-prop';
import styles from './Header.module.css';

const Header = ({ children }) => (
		<div className={styles.container} {...testIds(TEST_IDS.header)}>
			{ children }
		</div>
	);

export default Header;
