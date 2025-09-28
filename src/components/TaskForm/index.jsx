import classNames from "classnames/bind";
import styles from "./TaskForm.module.scss";
import Input from "./components/Input";
import Button from "../Button/Button";

const cx = classNames.bind(styles);

function TaskForm() {
    return (
        <div className={cx("wrap")}>
            <h1 className={cx("title")}>Tạo task</h1>
            <Input />
            <div className={cx("btns")}>
                <Button className={cx("cancel-btn")}>Cancel</Button>
                <Button>Submit</Button>
            </div>
        </div>
    );
}

export default TaskForm;
