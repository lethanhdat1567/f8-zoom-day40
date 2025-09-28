import classNames from "classnames/bind";
import styles from "./Tooltip.module.scss";

const cx = classNames.bind(styles);

function Tooltip({ children, text }) {
    return (
        <div className={cx("tooltip-wrapper")}>
            {children}
            <span className={cx("tooltip-text")}>
                {text}
                <span className={cx("tooltip-arrow")} />
            </span>
        </div>
    );
}

export default Tooltip;
