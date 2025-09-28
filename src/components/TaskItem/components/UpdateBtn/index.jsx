import classNames from "classnames/bind";
import styles from "./UpdateBtn.module.scss";
import Tooltip from "../Tooltip";
import { Link } from "react-router";

const cx = classNames.bind(styles);

function UpdateBtn({ onEdit }) {
    return (
        <Tooltip text={"Update task"}>
            <button className={cx("update-btn")} onClick={onEdit}>
                Update
            </button>
        </Tooltip>
    );
}

export default UpdateBtn;
