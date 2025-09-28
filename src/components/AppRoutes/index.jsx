import { BrowserRouter, HashRouter, Route, Routes } from "react-router";
import DefaultLayout from "../../layouts";
import TaskList from "../../pages/TaskList";
import NewTask from "../../pages/NewTask";
import EditTask from "../../pages/EditTask";

function AppRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route path="/" element={<TaskList />} />
                    <Route path="/new-task" element={<NewTask />} />
                    <Route path="/:id/edit" element={<EditTask />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default AppRoutes;
