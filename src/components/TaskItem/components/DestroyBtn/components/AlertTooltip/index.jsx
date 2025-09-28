import { createPortal } from "react-dom";
import classNames from "classnames/bind";
import styles from "./AlertTooltip.module.scss";
import Button from "../../../../../Button";

const cx = classNames.bind(styles);

function AlertTooltip({ open, message, onConfirm, onCancel }) {
    if (!open) return null;

    return createPortal(
        <div className={cx("overlay")}>
            <div className={cx("modal")}>
                <h3 className={cx("title")}>Confirmation</h3>
                <p className={cx("message")}>{message}</p>
                <div className={cx("actions")}>
                    <Button className={cx("btn", "cancel")} onClick={onCancel}>
                        Cancel
                    </Button>
                    <Button
                        className={cx("btn", "confirm")}
                        onClick={onConfirm}
                        primary
                    >
                        Confirm
                    </Button>
                </div>
            </div>
        </div>,
        document.body
    );
}

export default AlertTooltip;
