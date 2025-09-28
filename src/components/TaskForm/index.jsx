import classNames from "classnames/bind";
import styles from "./TaskForm.module.scss";
import Input from "./components/Input";
import Button from "../Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "../../libs/react-redux";

const cx = classNames.bind(styles);

function TaskForm({ initialData, onSubmit, submitText }) {
    const [title, setTitle] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loading);

    function handleCancel() {
        navigate("/");
    }

    function handleChange(e) {
        if (e.target.value.trim()) {
            dispatch({
                type: "DELETE_ERROR",
            });
        }
        setTitle(e.target.value);
    }

    function handleSubmit() {
        if (loading) return;

        onSubmit({ title: title });
    }

    useEffect(() => {
        if (submitText === "Update") {
            setTitle(initialData.title);
        }
    }, [submitText, initialData]);

    return (
        <div className={cx("wrap")}>
            <h1 className={cx("title")}>Tạo task</h1>
            <Input value={title} onChange={handleChange} />
            <div className={cx("btns")}>
                <Button className={cx("cancel-btn")} onClick={handleCancel}>
                    Cancel
                </Button>
                <Button onClick={handleSubmit}>Submit</Button>
            </div>
        </div>
    );
}

export default TaskForm;
