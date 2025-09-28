import classNames from "classnames/bind";
import styles from "./Button.module.scss";

import { Loader } from "lucide-react";
import clsx from "clsx";

const cx = classNames.bind(styles);

function Button({
    primary = false,
    rounded = false,
    bordered = false,
    disabled = false,
    loading = false,
    children,
    href = null,
    size = "medium",
    className = "",
    onClick = null,
    ...passProps
}) {
    const isDisabled = disabled || loading;

    const classNames = clsx(
        styles.wrapper,
        styles[size],
        {
            [styles.primary]: primary,
            [styles.rounded]: rounded,
            [styles.bordered]: bordered,
            [styles.disabled]: isDisabled,
            [styles.loading]: loading,
        },
        className
    );

    const handleClick = (e) => {
        if (isDisabled) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        onClick?.(e);
    };

    const Component = href ? "a" : "button";

    return (
        <Component
            {...passProps}
            href={isDisabled && href ? undefined : href}
            className={classNames}
            onClick={handleClick}
            disabled={Component === "button" ? isDisabled : undefined}
            tabIndex={isDisabled ? -1 : undefined}
            aria-disabled={isDisabled}
        >
            <div className={styles.content}>{children}</div>
            {loading && (
                <span className={styles.spinner}>
                    <Loader />
                </span>
            )}
        </Component>
    );
}

export default Button;
