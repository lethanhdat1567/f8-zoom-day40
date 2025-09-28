import classNames from "classnames/bind";
import styles from "./NewTask.module.scss";
import TaskForm from "../../components/TaskForm";
import { useNavigate } from "react-router";
import { useDispatch } from "../../libs/react-redux";
import { toast } from "react-toastify";

const cx = classNames.bind(styles);

function NewTask() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function handleSubmit(data) {
        if (!data.title.trim()) {
            dispatch({
                type: "SET_ERROR",
                payload: "Title cannot be empty",
            });
            return;
        }
        dispatch({
            type: "SET_LOADING",
        });
        try {
            const res = await fetch(`http://localhost:5000/tasks`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const newTask = await res.json();

            dispatch({
                type: "ADD_TASK",
                payload: newTask,
            });

            toast("Task created successfully", {
                type: "success",
                position: "bottom-right",
            });
            dispatch({
                type: "REMOVE_LOADING",
            });
            navigate("/");
        } catch (error) {
            console.error("Error creating task:", error);
            toast("Failed to create task", { type: "error" });
        }
    }

    return (
        <div className={cx("wrap")}>
            <TaskForm submitText="Create" onSubmit={handleSubmit} />
        </div>
    );
}

export default NewTask;
