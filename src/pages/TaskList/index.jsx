import classNames from "classnames/bind";
import styles from "./TaskList.module.scss";
import TaskItem from "../../components/TaskItem";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "../../libs/react-redux";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import Button from "../../components/Button";

const cx = classNames.bind(styles);

function TaskList() {
    const [isDeleting, setIsDeleting] = useState(false);
    const navigate = useNavigate();

    const loading = useSelector((state) => state.loading);
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: "SET_LOADING",
        });
        fetch("http://localhost:5000/tasks")
            .then((res) => res.json())
            .then((tasks) => {
                dispatch({
                    type: "SET_TASKS",
                    payload: tasks,
                });
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                dispatch({
                    type: "REMOVE_LOADING",
                });
            });
    }, []);

    function handleEdit(taskId) {
        navigate(`${taskId}/edit`);
    }

    function handleDestroy(taskId) {
        setIsDeleting(true);
        fetch(`http://localhost:5000/tasks/${taskId}`, {
            method: "DELETE",
        })
            .then((res) => {
                res.json();
            })
            .then(() => {
                dispatch({
                    type: "DELETE_TASK",
                    payload: taskId,
                });
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setIsDeleting(false);
                toast("Delete successfully!", {
                    position: "bottom-right",
                    type: "success",
                });
            });
    }

    console.log("component-rerender");

    if (loading) return <p className={cx("loading")}>Loading...</p>;

    return (
        <div className={cx("task-list")}>
            <h2>Task List</h2>
            {tasks.length > 0 ? (
                <ul className={cx("list")}>
                    {tasks.map((task) => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            onEdit={handleEdit}
                            onDelete={handleDestroy}
                            isDeleting={isDeleting}
                        />
                    ))}
                </ul>
            ) : (
                <p className={cx("empty")}>Chưa có task nào</p>
            )}
            <Link to={"/new-task"}>
                <Button className={cx("btn")}>Create new task</Button>
            </Link>
        </div>
    );
}

export default TaskList;
