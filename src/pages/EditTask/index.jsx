import classNames from "classnames/bind";
import styles from "./EditTask.module.scss";
import TaskForm from "../../components/TaskForm";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { useDispatch } from "../../libs/react-redux";
import { toast } from "react-toastify";

const cx = classNames.bind(styles);

function EditTask() {
    const { id } = useParams();

    const [task, setTask] = useState(null);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!id) return;

        (async () => {
            try {
                const res = await fetch(`http://localhost:5000/tasks/${id}`);

                if (res.status === 404) {
                    navigate("/");
                    return;
                }

                const data = await res.json();
                setTask(data);
            } catch (error) {
                console.error("Error fetching task:", error);
            } finally {
                setLoading(false);
            }
        })();
    }, [id, navigate]);

    async function handleSubmit(data) {
        if (!data.title.trim()) {
            dispatch({
                type: "SET_ERROR",
                payload: "Title không được để trống",
            });
            return;
        }
        dispatch({
            type: "SET_LOADING",
        });

        try {
            await fetch(`http://localhost:5000/tasks/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            dispatch({
                type: "UPDATE_TASK",
                payload: {
                    id: id,
                    title: data.title,
                },
            });
            dispatch({
                type: "REMOVE_LOADING",
            });
            navigate("/");
            toast("Update successfully", {
                type: "success",
                position: "bottom-right",
            });
        } catch (error) {
            console.error("Error updating task:", error);
        }
    }

    if (loading) return <p>Loading...</p>;
    if (!task) return null;

    return (
        <div className={cx("wrap")}>
            <TaskForm
                initialData={task}
                submitText="Update"
                onSubmit={handleSubmit}
            />
        </div>
    );
}

export default EditTask;
