import { useState } from 'react';
import classNames from 'classnames';
import styles from './ToggleButton.module.css';
import { testIds } from '../../utils/test-ids-prop';
import { TEST_IDS } from '../../constants/test-ids';

const ToggleButton = ({
	onClick = () => {},
	enabledText = '',
	disabledText = '',
	activeDefault = false,
}) => {
	const [isActive, setIsActive] = useState(activeDefault);

	const handleClick = () => {
		const newIsActive = !isActive;
		onClick(newIsActive);
		setIsActive(newIsActive);
	};
	return (
		<div className={styles.container} {...testIds(TEST_IDS.toggleButton)}>
			<button className={classNames(styles.button, { [styles.active]: isActive })} onClick={handleClick}>{enabledText}</button>
			<button className={classNames(styles.button, { [styles.active]: !isActive })} onClick={handleClick}>{disabledText}</button>
		</div>
	);
};

export default ToggleButton;
