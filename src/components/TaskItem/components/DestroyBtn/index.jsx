import classNames from "classnames/bind";
import styles from "./DestroyBtn.module.scss";
import Tooltip from "../Tooltip";
import AlertTooltip from "./components/AlertTooltip";
import { useState } from "react";

const cx = classNames.bind(styles);

function DestroyBtn({ onDelete, isDeleting }) {
    const [showAlert, setShowAlert] = useState(false);

    function handleDestroy() {
        if (isDeleting) return;

        setShowAlert(true);
    }

    function handleConFirm() {
        onDelete();
        setShowAlert(false);
    }

    return (
        <>
            <Tooltip text={"Delete task"}>
                <button className={cx("delete-btn")} onClick={handleDestroy}>
                    Delete
                </button>
            </Tooltip>
            <AlertTooltip
                open={showAlert}
                message={"Are you sure you want to delete this task?"}
                onCancel={() => setShowAlert(false)}
                onConfirm={handleConFirm}
            />
        </>
    );
}

export default DestroyBtn;
