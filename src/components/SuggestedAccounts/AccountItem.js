import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './SuggestedAccounts.module.scss';
import { Wrapper as PopperWrapper } from '../Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);
function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <Tippy interactive placement="bottom" render={renderPreview} delay={[800, 0]} offset={[-20, 0]}>
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
        </Tippy>
    );
}

export default AccountItem;
