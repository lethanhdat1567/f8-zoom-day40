import classNames from "classnames/bind";
import styles from "./TaskList.module.scss";

const cx = classNames.bind(styles);

function TaskList() {
    return (
        <div className={cx("task-list")}>
            <h2>Task List</h2>
            <ul className={cx("list")}>
                <li className={cx("task-item")}>
                    <span className={cx("task-title")}>
                        Complete project proposal
                    </span>
                    <div className={cx("actions")}>
                        <button className={cx("update-btn")}>Update</button>
                        <button className={cx("delete-btn")}>Delete</button>
                    </div>
                </li>
                <li className={cx("task-item")}>
                    <span className={cx("task-title")}>
                        Review client feedback
                    </span>
                    <div className={cx("actions")}>
                        <button className={cx("update-btn")}>Update</button>
                        <button className={cx("delete-btn")}>Delete</button>
                    </div>
                </li>
                <li className={cx("task-item")}>
                    <span className={cx("task-title")}>
                        Update website content
                    </span>
                    <div className={cx("actions")}>
                        <button className={cx("update-btn")}>Update</button>
                        <button className={cx("delete-btn")}>Delete</button>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default TaskList;
