import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import Button from '../../Button';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1665367200&x-signature=2o509iYKB1fv3RdIthfn1Wc0BPc%3D"
                    alt="Thế anh"
                />
                <Button className={cx('follow-btn')} type="primary">
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <span>theanh28entertainment</span>
                    <FontAwesomeIcon className={cx('icon')} icon={faCircleCheck} />
                </p>
                <p className={cx('name')}>Theanh28 Entertainment</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>7.5M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>7.5M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
