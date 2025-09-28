import classNames from "classnames/bind";
import styles from "./TaskItem.module.scss";
import Tooltip from "./components/Tooltip";
import UpdateBtn from "./components/UpdateBtn";
import DestroyBtn from "./components/DestroyBtn";

const cx = classNames.bind(styles);

function TaskItem({ task, onEdit, onDelete, isDeleting }) {
    function handleEdit() {
        onEdit(task.id);
    }

    function handleDestroy() {
        onDelete(task.id);
    }

    return (
        <div className={cx("task-item")}>
            <span className={cx("task-title")}>{task.title}</span>
            <div className={cx("actions")}>
                <UpdateBtn onEdit={handleEdit} />
                <DestroyBtn onDelete={handleDestroy} isDeleting={isDeleting} />
            </div>
        </div>
    );
}

export default TaskItem;
