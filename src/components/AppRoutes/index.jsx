import { BrowserRouter, Route, Routes } from "react-router";
import DefaultLayout from "../../layouts";
import TaskList from "../../pages/TaskList";
import NewTask from "../../pages/NewTask";
import EditTask from "../../pages/EditTask";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route path="/" element={<TaskList />} />
                    <Route path="/new-task" element={<NewTask />} />
                    <Route path="/:id/edit" element={<EditTask />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
