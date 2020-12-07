import { TEST_IDS } from '../../constants/test-ids';
import { testIds } from '../../utils/test-ids-prop';
import styles from './ErrorMessage.module.css';

const ErrorMessage = ({ error }) => <div className={styles.container} {...testIds(TEST_IDS.errorMessage)}>{error}</div>;

export default ErrorMessage;
