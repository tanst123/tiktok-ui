import classNames from 'classnames';
import { forwardRef, useState } from 'react';
import images from '../../assets/images';

import styles from './Image.module.scss';

function Image({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) {
    const [fallback, setFallback] = useState('');

    const handleError = () => setFallback(customFallback);

    return (
        <img
            className={classNames(styles.wrapper, className)}
            src={fallback || src}
            alt={alt}
            {...props}
            ref={ref}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);
