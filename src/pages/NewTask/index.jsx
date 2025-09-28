import classNames from "classnames/bind";
import styles from "./NewTask.module.scss";
import TaskForm from "../../components/TaskForm";

const cx = classNames.bind(styles);

function NewTask() {
    return (
        <div className={cx("wrap")}>
            <TaskForm />
        </div>
    );
}

export default NewTask;
