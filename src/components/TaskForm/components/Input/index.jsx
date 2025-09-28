import classNames from "classnames/bind";
import styles from "./Input.module.scss";
import { useSelector } from "../../../../libs/react-redux";

const cx = classNames.bind(styles);

function Input({ value, onChange }) {
    const error = useSelector((state) => state.error);

    return (
        <div className={cx("wrap", { error: error })}>
            <label className={cx("label")} htmlFor="input">
                Title*
            </label>
            <input
                id="input"
                className={cx("input")}
                placeholder="Title..."
                value={value}
                onChange={onChange}
            />
            {error && <p className={cx("error")}>{error}</p>}
        </div>
    );
}

export default Input;
