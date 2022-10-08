import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1665367200&x-signature=2o509iYKB1fv3RdIthfn1Wc0BPc%3D"
                alt="thế anh"
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <span>theanh28entertainment</span>
                    <FontAwesomeIcon className={cx('icon')} icon={faCircleCheck} />
                </p>
                <p className={cx('name')}>Theanh28 Entertainment</p>
            </div>
        </div>
    );
}

export default AccountItem;
