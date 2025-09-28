import classNames from "classnames/bind";
import styles from "./EditTask.module.scss";
import TaskForm from "../../components/TaskForm";

const cx = classNames.bind(styles);

function EditTask() {
    return (
        <div className={cx("wrap")}>
            <TaskForm />
        </div>
    );
}

export default EditTask;
