import { Provider as ReduxProvider } from "./contexts/ReduxContext";
import GlobalStyles from "./components/GlobalStyles";
import AppRoutes from "./components/AppRoutes";
import store from "./store";
import { ToastContainer } from "react-toastify";

function App() {
    return (
        <ReduxProvider store={store}>
            <GlobalStyles>
                <AppRoutes />
                <ToastContainer />
            </GlobalStyles>
        </ReduxProvider>
    );
}

export default App;
