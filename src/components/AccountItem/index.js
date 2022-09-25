import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1655585105890309~c5_300x300.webp?x-expires=1664161200&x-signature=l9OFJoB0qjZrnn6ueIptgrDg89I%3D"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('icon-check')} icon={faCheckCircle} />
                </p>
                <p className={cx('user')}>nguyenvana</p>
            </div>
        </div>
    );
}

export default AccountItem;
