import classNames from "classnames/bind";
import styles from "./Input.module.scss";

const cx = classNames.bind(styles);

function Input() {
    return (
        <div className={cx("wrap")}>
            <label className={cx("label")} htmlFor="input">
                Title
            </label>
            <input id="input" className={cx("input")} placeholder="Title..." />
        </div>
    );
}

export default Input;
